import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
    customerOrderId: string;
    account: string;
}
export declare class GetAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountOrdersCustomerOrderIdPathParams;
}
export declare class GetAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orderStates?: shared.OrderState[];
}
