import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientSmsNotifcationRequestNotificationHip extends SpeakeasyBase {
    id: string;
    name?: string;
}
export declare class PatientSmsNotifcationRequestNotification extends SpeakeasyBase {
    careContextInfo: string;
    deeplinkUrl?: string;
    hip: PatientSmsNotifcationRequestNotificationHip;
    phoneNo: string;
    receiverName?: string;
}
export declare class PatientSmsNotifcationRequest extends SpeakeasyBase {
    notification: PatientSmsNotifcationRequestNotification;
    requestId: string;
    timestamp: Date;
}
