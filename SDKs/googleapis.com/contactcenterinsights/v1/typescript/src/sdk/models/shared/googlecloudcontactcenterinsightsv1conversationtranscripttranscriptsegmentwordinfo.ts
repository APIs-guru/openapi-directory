import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo
/** 
 * Word-level info for words in a transcript.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @Metadata({ data: "json, name=startOffset" })
  startOffset?: string;

  @Metadata({ data: "json, name=word" })
  word?: string;
}
