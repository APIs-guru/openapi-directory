import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED"
,    NotCorrect = "NOT_CORRECT"
,    PartiallyCorrect = "PARTIALLY_CORRECT"
,    FullyCorrect = "FULLY_CORRECT"
}


// GoogleCloudContactcenterinsightsV1AnswerFeedback
/** 
 * The feedback that the customer has about a certain answer in the conversation.
**/
export class GoogleCloudContactcenterinsightsV1AnswerFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=clicked" })
  clicked?: boolean;

  @Metadata({ data: "json, name=correctnessLevel" })
  correctnessLevel?: GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum;

  @Metadata({ data: "json, name=displayed" })
  displayed?: boolean;
}
