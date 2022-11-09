import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAccountsAccountOrderImpactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PostAccountsAccountOrderImpactRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @Metadata({ data: "json, name=InstrumentType" })
  instrumentType?: string;

  @Metadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @Metadata({ data: "json, name=Order Type" })
  orderType?: number;

  @Metadata({ data: "json, name=Price" })
  price?: number;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=Side" })
  side?: number;

  @Metadata({ data: "json, name=Ticker" })
  ticker?: string;

  @Metadata({ data: "json, name=Time in Force" })
  timeInForce?: number;
}


export class PostAccountsAccountOrderImpactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAccountsAccountOrderImpactPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostAccountsAccountOrderImpactRequestBody;
}


export class PostAccountsAccountOrderImpact200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Commission" })
  commission?: number;

  @Metadata({ data: "json, name=CommissionsCurrency" })
  commissionsCurrency?: string;

  @Metadata({ data: "json, name=EquityWithLoan" })
  equityWithLoan?: number;

  @Metadata({ data: "json, name=InitMargin" })
  initMargin?: number;

  @Metadata({ data: "json, name=InitMarginBefore" })
  initMarginBefore?: number;

  @Metadata({ data: "json, name=MaintMargin" })
  maintMargin?: number;

  @Metadata({ data: "json, name=MaintMarginBefore" })
  maintMarginBefore?: number;

  @Metadata({ data: "json, name=MarginCurrency" })
  marginCurrency?: string;

  @Metadata({ data: "json, name=MaxCommissions" })
  maxCommissions?: number;

  @Metadata({ data: "json, name=MinCommissions" })
  minCommissions?: number;
}


export class PostAccountsAccountOrderImpactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAccountsAccountOrderImpact200ApplicationJsonObject?: PostAccountsAccountOrderImpact200ApplicationJson;

  @Metadata()
  statusCode: number;
}
