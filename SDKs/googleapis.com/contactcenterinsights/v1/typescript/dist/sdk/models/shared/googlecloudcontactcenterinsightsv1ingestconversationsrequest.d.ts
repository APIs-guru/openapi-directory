import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig";
/**
 * The request to ingest conversations.
**/
export declare class GoogleCloudContactcenterinsightsV1IngestConversationsRequest extends SpeakeasyBase {
    conversationConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;
    gcsSource?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;
    parent?: string;
    transcriptObjectConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
}
