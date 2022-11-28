import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationParticipant } from "./googlecloudcontactcenterinsightsv1conversationparticipant";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo";
/**
 * A segment of a full transcript.
**/
export declare class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment extends SpeakeasyBase {
    channelTag?: number;
    confidence?: number;
    dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
    languageCode?: string;
    messageTime?: string;
    segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant;
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    text?: string;
    words?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[];
}
