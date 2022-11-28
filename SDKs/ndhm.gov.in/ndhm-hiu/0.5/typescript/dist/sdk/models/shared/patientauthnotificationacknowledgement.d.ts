import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare enum PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class PatientAuthNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
    status: PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
}
export declare class PatientAuthNotificationAcknowledgement extends SpeakeasyBase {
    acknowledgement?: PatientAuthNotificationAcknowledgementAcknowledgement;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
