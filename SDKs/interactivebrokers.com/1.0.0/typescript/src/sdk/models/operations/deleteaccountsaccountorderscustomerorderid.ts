import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" })
  customerOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
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


export class DeleteAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAccountsAccountOrdersCustomerOrderIdPathParams;
}


export class DeleteAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson })
  deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}
