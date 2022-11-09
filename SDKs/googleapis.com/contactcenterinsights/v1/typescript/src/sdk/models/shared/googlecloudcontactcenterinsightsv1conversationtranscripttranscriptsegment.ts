import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationParticipant } from "./googlecloudcontactcenterinsightsv1conversationparticipant";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo";


// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
/** 
 * A segment of a full transcript.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=dialogflowSegmentMetadata" })
  dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=messageTime" })
  messageTime?: string;

  @Metadata({ data: "json, name=segmentParticipant" })
  segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant;

  @Metadata({ data: "json, name=sentiment" })
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=words", elemType: shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo })
  words?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[];
}
