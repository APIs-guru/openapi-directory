import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum {
    MatchConfidenceLevelUnspecified = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
}


// GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
/** 
 * An answer from Knowledge Connector.
**/
export class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=faqQuestion" })
  faqQuestion?: string;

  @Metadata({ data: "json, name=matchConfidence" })
  matchConfidence?: number;

  @Metadata({ data: "json, name=matchConfidenceLevel" })
  matchConfidenceLevel?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
