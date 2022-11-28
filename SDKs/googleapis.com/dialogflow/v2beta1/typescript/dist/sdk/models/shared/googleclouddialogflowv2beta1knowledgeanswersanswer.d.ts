import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum {
    MatchConfidenceLevelUnspecified = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * An answer from Knowledge Connector.
**/
export declare class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer extends SpeakeasyBase {
    answer?: string;
    faqQuestion?: string;
    matchConfidence?: number;
    matchConfidenceLevel?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum;
    source?: string;
}
