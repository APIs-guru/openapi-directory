import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
    customerOrderId: string;
    account: string;
}
export declare class DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
    customerOrderId?: string;
    orderQty?: number;
    orderType?: number;
    price?: string;
    side?: number;
    status?: shared.OrderStatusEnum;
    symbol?: number;
    warning?: string;
}
export declare class DeleteAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    pathParams: DeleteAccountsAccountOrdersCustomerOrderIdPathParams;
}
export declare class DeleteAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson[];
    statusCode: number;
}
