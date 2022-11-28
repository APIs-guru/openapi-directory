import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAccountsAccountOrderImpactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PostAccountsAccountOrderImpactRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=ContractId" })
  contractId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstrumentType" })
  instrumentType?: string;

  @SpeakeasyMetadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @SpeakeasyMetadata({ data: "json, name=Order Type" })
  orderType?: number;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Side" })
  side?: number;

  @SpeakeasyMetadata({ data: "json, name=Ticker" })
  ticker?: string;

  @SpeakeasyMetadata({ data: "json, name=Time in Force" })
  timeInForce?: number;
}


export class PostAccountsAccountOrderImpact200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Commission" })
  commission?: number;

  @SpeakeasyMetadata({ data: "json, name=CommissionsCurrency" })
  commissionsCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=EquityWithLoan" })
  equityWithLoan?: number;

  @SpeakeasyMetadata({ data: "json, name=InitMargin" })
  initMargin?: number;

  @SpeakeasyMetadata({ data: "json, name=InitMarginBefore" })
  initMarginBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=MaintMargin" })
  maintMargin?: number;

  @SpeakeasyMetadata({ data: "json, name=MaintMarginBefore" })
  maintMarginBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=MarginCurrency" })
  marginCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCommissions" })
  maxCommissions?: number;

  @SpeakeasyMetadata({ data: "json, name=MinCommissions" })
  minCommissions?: number;
}


export class PostAccountsAccountOrderImpactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAccountsAccountOrderImpactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAccountsAccountOrderImpactRequestBody;
}


export class PostAccountsAccountOrderImpactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAccountsAccountOrderImpact200ApplicationJsonObject?: PostAccountsAccountOrderImpact200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
