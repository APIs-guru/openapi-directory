import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
    customerOrderId: string;
    account: string;
}
export declare class PutAccountsAccountOrdersCustomerOrderIdRequestBody extends SpeakeasyBase {
    auxPrice?: number;
    customerOrderId?: string;
    germanHftAlgo?: boolean;
    mifid2Algo?: string;
    mifid2DecisionMaker?: string;
    mifid2ExecutionAlgo?: string;
    mifid2ExecutionTrader?: string;
    orderType?: number;
    origCustomerOrderId?: string;
    outsideRth?: number;
    price?: number;
    quantity?: number;
    side?: number;
    timeInForce?: number;
}
export declare class PutAccountsAccountOrdersCustomerOrderId200ApplicationJson extends SpeakeasyBase {
    customerOrderId?: string;
    orderQty?: number;
    orderType?: number;
    price?: string;
    side?: number;
    status?: shared.OrderStatusEnum;
    symbol?: number;
    warning?: string;
}
export declare class PutAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
    pathParams: PutAccountsAccountOrdersCustomerOrderIdPathParams;
    request: PutAccountsAccountOrdersCustomerOrderIdRequestBody;
}
export declare class PutAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects?: PutAccountsAccountOrdersCustomerOrderId200ApplicationJson[];
    statusCode: number;
}
