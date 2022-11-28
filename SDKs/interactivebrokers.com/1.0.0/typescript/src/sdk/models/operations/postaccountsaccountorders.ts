import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAccountsAccountOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PostAccountsAccountOrdersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=ContractId" })
  contractId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=GermanHftAlgo" })
  germanHftAlgo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstrumentType" })
  instrumentType?: string;

  @SpeakeasyMetadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @SpeakeasyMetadata({ data: "json, name=Mifid2Algo" })
  mifid2Algo?: string;

  @SpeakeasyMetadata({ data: "json, name=Mifid2DecisionMaker" })
  mifid2DecisionMaker?: string;

  @SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionAlgo" })
  mifid2ExecutionAlgo?: string;

  @SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionTrader" })
  mifid2ExecutionTrader?: string;

  @SpeakeasyMetadata({ data: "json, name=Order Type" })
  orderType?: number;

  @SpeakeasyMetadata({ data: "json, name=OrderRestrictions" })
  orderRestrictions?: number;

  @SpeakeasyMetadata({ data: "json, name=Outside RTH" })
  outsideRth?: number;

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


export class PostAccountsAccountOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAccountsAccountOrdersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAccountsAccountOrdersRequestBody;
}


export class PostAccountsAccountOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.OrderState })
  orderStates?: shared.OrderState[];
}
