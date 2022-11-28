import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Deidentify } from "./googleprivacydlpv2deidentify";
import { GooglePrivacyDlpV2PublishToPubSub } from "./googleprivacydlpv2publishtopubsub";
import { GooglePrivacyDlpV2SaveFindings } from "./googleprivacydlpv2savefindings";



// GooglePrivacyDlpV2Action
/** 
 * A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
**/
export class GooglePrivacyDlpV2Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentify" })
  deidentify?: GooglePrivacyDlpV2Deidentify;

  @SpeakeasyMetadata({ data: "json, name=jobNotificationEmails" })
  jobNotificationEmails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pubSub" })
  pubSub?: GooglePrivacyDlpV2PublishToPubSub;

  @SpeakeasyMetadata({ data: "json, name=publishFindingsToCloudDataCatalog" })
  publishFindingsToCloudDataCatalog?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=publishSummaryToCscc" })
  publishSummaryToCscc?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=publishToStackdriver" })
  publishToStackdriver?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=saveFindings" })
  saveFindings?: GooglePrivacyDlpV2SaveFindings;
}
