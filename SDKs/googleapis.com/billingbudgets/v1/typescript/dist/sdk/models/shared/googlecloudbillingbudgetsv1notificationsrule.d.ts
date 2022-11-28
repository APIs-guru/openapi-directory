import { SpeakeasyBase } from "../../../internal/utils";
/**
 * NotificationsRule defines notifications that are sent based on budget spend and thresholds.
**/
export declare class GoogleCloudBillingBudgetsV1NotificationsRule extends SpeakeasyBase {
    disableDefaultIamRecipients?: boolean;
    monitoringNotificationChannels?: string[];
    pubsubTopic?: string;
    schemaVersion?: string;
}
