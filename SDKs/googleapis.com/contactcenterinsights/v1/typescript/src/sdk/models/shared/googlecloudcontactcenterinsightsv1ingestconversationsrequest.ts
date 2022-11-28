import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig";



// GoogleCloudContactcenterinsightsV1IngestConversationsRequest
/** 
 * The request to ingest conversations.
**/
export class GoogleCloudContactcenterinsightsV1IngestConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationConfig" })
  conversationConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=transcriptObjectConfig" })
  transcriptObjectConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
}
