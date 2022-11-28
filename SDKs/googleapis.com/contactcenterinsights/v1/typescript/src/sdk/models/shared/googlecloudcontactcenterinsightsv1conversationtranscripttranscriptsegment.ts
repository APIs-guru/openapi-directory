import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationParticipant } from "./googlecloudcontactcenterinsightsv1conversationparticipant";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo";



// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
/** 
 * A segment of a full transcript.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=dialogflowSegmentMetadata" })
  dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=messageTime" })
  messageTime?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentParticipant" })
  segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant;

  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo })
  words?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[];
}
