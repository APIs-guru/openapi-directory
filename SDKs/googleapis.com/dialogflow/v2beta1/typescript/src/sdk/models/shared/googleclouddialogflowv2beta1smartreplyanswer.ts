import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SmartReplyAnswer
/** 
 * Represents a smart reply answer.
**/
export class GoogleCloudDialogflowV2beta1SmartReplyAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=reply" })
  reply?: string;
}
