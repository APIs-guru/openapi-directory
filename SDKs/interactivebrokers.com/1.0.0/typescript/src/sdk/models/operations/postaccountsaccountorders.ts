import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAccountsAccountOrdersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PostAccountsAccountOrdersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @Metadata({ data: "json, name=GermanHftAlgo" })
  germanHftAlgo?: boolean;

  @Metadata({ data: "json, name=InstrumentType" })
  instrumentType?: string;

  @Metadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @Metadata({ data: "json, name=Mifid2Algo" })
  mifid2Algo?: string;

  @Metadata({ data: "json, name=Mifid2DecisionMaker" })
  mifid2DecisionMaker?: string;

  @Metadata({ data: "json, name=Mifid2ExecutionAlgo" })
  mifid2ExecutionAlgo?: string;

  @Metadata({ data: "json, name=Mifid2ExecutionTrader" })
  mifid2ExecutionTrader?: string;

  @Metadata({ data: "json, name=Order Type" })
  orderType?: number;

  @Metadata({ data: "json, name=OrderRestrictions" })
  orderRestrictions?: number;

  @Metadata({ data: "json, name=Outside RTH" })
  outsideRth?: number;

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


export class PostAccountsAccountOrdersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAccountsAccountOrdersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostAccountsAccountOrdersRequestBody;
}


export class PostAccountsAccountOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrderState })
  orderStates?: shared.OrderState[];
}
