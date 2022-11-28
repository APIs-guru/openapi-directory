import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class HiuSubscriptionRequestReceiptSubscriptionRequest extends SpeakeasyBase {
    id: string;
}
export declare class HiuSubscriptionRequestReceipt extends SpeakeasyBase {
    error?: Error;
    requestId: string;
    resp: RequestReference;
    subscriptionRequest?: HiuSubscriptionRequestReceiptSubscriptionRequest;
    timestamp: Date;
}
