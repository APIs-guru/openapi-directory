import { SpeakeasyBase } from "../../../internal/utils";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { ConsentStatusEnum } from "./consentstatusenum";
export declare class HipConsentNotificationNotificationConsentDetailCareContexts extends SpeakeasyBase {
    careContextReference: string;
    patientReference: string;
}
export declare class HipConsentNotificationNotificationConsentDetailConsentManager extends SpeakeasyBase {
    id: string;
}
export declare class HipConsentNotificationNotificationConsentDetailHip extends SpeakeasyBase {
    id: string;
}
export declare class HipConsentNotificationNotificationConsentDetail extends SpeakeasyBase {
    careContexts: HipConsentNotificationNotificationConsentDetailCareContexts[];
    consentId: string;
    consentManager: HipConsentNotificationNotificationConsentDetailConsentManager;
    createdAt: Date;
    hiTypes: HiTypeEnumEnum[];
    hip: HipConsentNotificationNotificationConsentDetailHip;
    patient: ConsentManagerPatientId;
    permission: Permission;
    purpose: UsePurpose;
    schemaVersion?: string;
}
export declare class HipConsentNotificationNotification extends SpeakeasyBase {
    consentDetail: HipConsentNotificationNotificationConsentDetail;
    consentId: string;
    signature: string;
    status: ConsentStatusEnum;
}
export declare class HipConsentNotification extends SpeakeasyBase {
    notification: HipConsentNotificationNotification;
    requestId: string;
    timestamp: Date;
}
