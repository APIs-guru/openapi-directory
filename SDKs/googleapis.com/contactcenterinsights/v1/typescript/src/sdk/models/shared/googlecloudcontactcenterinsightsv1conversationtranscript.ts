import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment";



// GoogleCloudContactcenterinsightsV1ConversationTranscript
/** 
 * A message representing the transcript of a conversation.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transcriptSegments", elemType: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment })
  transcriptSegments?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[];
}
