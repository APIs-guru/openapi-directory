import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2PublishToPubSub
/** 
 * Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk
**/
export class GooglePrivacyDlpV2PublishToPubSub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
