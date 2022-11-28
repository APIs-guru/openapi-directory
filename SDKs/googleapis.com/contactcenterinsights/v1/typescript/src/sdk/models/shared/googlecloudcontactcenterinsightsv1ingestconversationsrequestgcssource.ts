import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource
/** 
 * Configuration for Cloud Storage bucket sources.
**/
export class GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketUri" })
  bucketUri?: string;
}
