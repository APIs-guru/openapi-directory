import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class HipConsentNotificationResponse extends SpeakeasyBase {
    acknowledgement?: ConsentAcknowledgement;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
