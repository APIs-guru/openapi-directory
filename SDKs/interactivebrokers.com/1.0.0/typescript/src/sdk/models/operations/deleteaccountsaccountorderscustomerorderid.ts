import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" })
  customerOrderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class DeleteAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAccountsAccountOrdersCustomerOrderIdPathParams;
}


export class DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
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


export class DeleteAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson })
  deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson[];

  @Metadata()
  statusCode: number;
}
