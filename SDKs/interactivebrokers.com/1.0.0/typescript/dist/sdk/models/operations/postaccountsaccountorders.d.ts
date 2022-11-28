import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountsAccountOrdersPathParams extends SpeakeasyBase {
    account: string;
}
export declare class PostAccountsAccountOrdersRequestBody extends SpeakeasyBase {
    auxPrice?: number;
    contractId?: number;
    currency?: string;
    customerOrderId?: string;
    germanHftAlgo?: boolean;
    instrumentType?: string;
    listingExchange?: string;
    mifid2Algo?: string;
    mifid2DecisionMaker?: string;
    mifid2ExecutionAlgo?: string;
    mifid2ExecutionTrader?: string;
    orderType?: number;
    orderRestrictions?: number;
    outsideRth?: number;
    price?: number;
    quantity?: number;
    side?: number;
    ticker?: string;
    timeInForce?: number;
}
export declare class PostAccountsAccountOrdersRequest extends SpeakeasyBase {
    pathParams: PostAccountsAccountOrdersPathParams;
    request: PostAccountsAccountOrdersRequestBody;
}
export declare class PostAccountsAccountOrdersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orderStates?: shared.OrderState[];
}
