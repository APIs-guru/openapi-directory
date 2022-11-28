import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
**/
export declare class GoogleCloudBillingBudgetsV1beta1AllUpdatesRule extends SpeakeasyBase {
    disableDefaultIamRecipients?: boolean;
    monitoringNotificationChannels?: string[];
    pubsubTopic?: string;
    schemaVersion?: string;
}
