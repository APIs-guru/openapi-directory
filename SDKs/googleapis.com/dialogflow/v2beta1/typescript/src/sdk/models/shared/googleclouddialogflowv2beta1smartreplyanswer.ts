import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SmartReplyAnswer
/** 
 * Represents a smart reply answer.
**/
export class GoogleCloudDialogflowV2beta1SmartReplyAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=reply" })
  reply?: string;
}
