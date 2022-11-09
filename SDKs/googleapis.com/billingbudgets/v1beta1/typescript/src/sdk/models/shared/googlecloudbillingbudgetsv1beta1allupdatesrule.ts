import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBillingBudgetsV1beta1AllUpdatesRule
/** 
 * AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
**/
export class GoogleCloudBillingBudgetsV1beta1AllUpdatesRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableDefaultIamRecipients" })
  disableDefaultIamRecipients?: boolean;

  @Metadata({ data: "json, name=monitoringNotificationChannels" })
  monitoringNotificationChannels?: string[];

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
