import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
export declare class HiuConsentNotificationEventNotification extends SpeakeasyBase {
    consentArtefacts?: ConsentArtefactReference[];
    consentRequestId: string;
    status: ConsentStatusEnum;
}
export declare class HiuConsentNotificationEvent extends SpeakeasyBase {
    notification: HiuConsentNotificationEventNotification;
    requestId: string;
    timestamp: Date;
}
