import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2SmartReplyAnswer
/** 
 * Represents a smart reply answer.
**/
export class GoogleCloudDialogflowV2SmartReplyAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=reply" })
  reply?: string;
}
