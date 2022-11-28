import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HealthInformationNotificationNotificationNotifierTypeEnum {
    Hiu = "HIU",
    Hip = "HIP"
}
export declare class HealthInformationNotificationNotificationNotifier extends SpeakeasyBase {
    id: string;
    type: HealthInformationNotificationNotificationNotifierTypeEnum;
}
export declare enum HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum {
    Transferred = "TRANSFERRED",
    Failed = "FAILED"
}
export declare enum HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum {
    Delivered = "DELIVERED",
    Ok = "OK",
    Errored = "ERRORED"
}
export declare class HealthInformationNotificationNotificationStatusNotificationStatusResponses extends SpeakeasyBase {
    careContextReference: string;
    description?: string;
    hiStatus: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;
}
export declare class HealthInformationNotificationNotificationStatusNotification extends SpeakeasyBase {
    hipId: string;
    sessionStatus: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
    statusResponses?: HealthInformationNotificationNotificationStatusNotificationStatusResponses[];
}
export declare class HealthInformationNotificationNotification extends SpeakeasyBase {
    consentId: string;
    doneAt: Date;
    notifier: HealthInformationNotificationNotificationNotifier;
    statusNotification: HealthInformationNotificationNotificationStatusNotification;
    transactionId: string;
}
export declare class HealthInformationNotification extends SpeakeasyBase {
    notification: HealthInformationNotificationNotification;
    requestId: string;
    timestamp: Date;
}
