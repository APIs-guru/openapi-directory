import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" })
  customerOrderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PutAccountsAccountOrdersCustomerOrderIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @Metadata({ data: "json, name=GermanHftAlgo" })
  germanHftAlgo?: boolean;

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

  @Metadata({ data: "json, name=OrigCustomerOrderId" })
  origCustomerOrderId?: string;

  @Metadata({ data: "json, name=Outside RTH" })
  outsideRth?: number;

  @Metadata({ data: "json, name=Price" })
  price?: number;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=Side" })
  side?: number;

  @Metadata({ data: "json, name=Time in Force" })
  timeInForce?: number;
}


export class PutAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAccountsAccountOrdersCustomerOrderIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutAccountsAccountOrdersCustomerOrderIdRequestBody;
}


export class PutAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @Metadata({ data: "json, name=OrderQty" })
  orderQty?: number;

  @Metadata({ data: "json, name=OrderType" })
  orderType?: number;

  @Metadata({ data: "json, name=Price" })
  price?: string;

  @Metadata({ data: "json, name=Side" })
  side?: number;

  @Metadata({ data: "json, name=Status" })
  status?: shared.OrderStatusEnum;

  @Metadata({ data: "json, name=Symbol" })
  symbol?: number;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}


export class PutAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.PutAccountsAccountOrdersCustomerOrderId200ApplicationJson })
  putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: PutAccountsAccountOrdersCustomerOrderId200ApplicationJson[];

  @Metadata()
  statusCode: number;
}
