import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment";


// GoogleCloudContactcenterinsightsV1ConversationTranscript
/** 
 * A message representing the transcript of a conversation.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscript extends SpeakeasyBase {
  @Metadata({ data: "json, name=transcriptSegments", elemType: shared.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment })
  transcriptSegments?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[];
}
