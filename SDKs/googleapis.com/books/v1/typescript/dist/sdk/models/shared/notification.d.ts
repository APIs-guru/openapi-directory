import { SpeakeasyBase } from "../../../internal/utils";
export declare class Notification extends SpeakeasyBase {
    body?: string;
    crmExperimentIds?: string[];
    docId?: string;
    docType?: string;
    dontShowNotification?: boolean;
    iconUrl?: string;
    isDocumentMature?: boolean;
    kind?: string;
    notificationGroup?: string;
    notificationType?: string;
    pcampaignId?: string;
    reason?: string;
    showNotificationSettingsAction?: boolean;
    targetUrl?: string;
    timeToExpireMs?: string;
    title?: string;
}
