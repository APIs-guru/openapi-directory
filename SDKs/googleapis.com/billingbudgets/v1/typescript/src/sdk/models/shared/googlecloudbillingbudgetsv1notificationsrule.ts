import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBillingBudgetsV1NotificationsRule
/** 
 * NotificationsRule defines notifications that are sent based on budget spend and thresholds.
**/
export class GoogleCloudBillingBudgetsV1NotificationsRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableDefaultIamRecipients" })
  disableDefaultIamRecipients?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoringNotificationChannels" })
  monitoringNotificationChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
