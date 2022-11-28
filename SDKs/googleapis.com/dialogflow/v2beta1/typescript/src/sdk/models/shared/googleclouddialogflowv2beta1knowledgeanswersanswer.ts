import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum {
    MatchConfidenceLevelUnspecified = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}


// GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
/** 
 * An answer from Knowledge Connector.
**/
export class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=faqQuestion" })
  faqQuestion?: string;

  @SpeakeasyMetadata({ data: "json, name=matchConfidence" })
  matchConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=matchConfidenceLevel" })
  matchConfidenceLevel?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
