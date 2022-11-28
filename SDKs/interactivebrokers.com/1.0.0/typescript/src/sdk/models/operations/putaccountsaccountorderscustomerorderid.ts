import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" })
  customerOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class PutAccountsAccountOrdersCustomerOrderIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aux Price" })
  auxPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=GermanHftAlgo" })
  germanHftAlgo?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=OrigCustomerOrderId" })
  origCustomerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=Outside RTH" })
  outsideRth?: number;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Side" })
  side?: number;

  @SpeakeasyMetadata({ data: "json, name=Time in Force" })
  timeInForce?: number;
}


export class PutAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderQty" })
  orderQty?: number;

  @SpeakeasyMetadata({ data: "json, name=OrderType" })
  orderType?: number;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=Side" })
  side?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: shared.OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Symbol" })
  symbol?: number;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}


export class PutAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAccountsAccountOrdersCustomerOrderIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutAccountsAccountOrdersCustomerOrderIdRequestBody;
}


export class PutAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: PutAccountsAccountOrdersCustomerOrderId200ApplicationJson })
  putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: PutAccountsAccountOrdersCustomerOrderId200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}
