import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo
/** 
 * Word-level info for words in a transcript.
**/
export class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startOffset" })
  startOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=word" })
  word?: string;
}
