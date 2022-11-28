import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum {
    StringAggregationTypeUnspecified = "STRING_AGGREGATION_TYPE_UNSPECIFIED",
    MajorityVote = "MAJORITY_VOTE",
    UnanimousVote = "UNANIMOUS_VOTE",
    NoAggregation = "NO_AGGREGATION"
}
/**
 * Config for image classification human labeling task.
**/
export declare class GoogleCloudDatalabelingV1beta1ImageClassificationConfig extends SpeakeasyBase {
    allowMultiLabel?: boolean;
    annotationSpecSet?: string;
    answerAggregationType?: GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
}
