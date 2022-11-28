import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountOrdersPathParams extends SpeakeasyBase {
    account: string;
}
export declare class GetAccountsAccountOrdersRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountOrdersPathParams;
}
export declare class GetAccountsAccountOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orderStates?: shared.OrderState[];
}
