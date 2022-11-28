import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
    status: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
    subscriptionRequestId: string;
}
export declare class HiuSubscriptionRequestNotificationAcknowledgement extends SpeakeasyBase {
    acknowledgement?: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
