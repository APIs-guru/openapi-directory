import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum {
    StringAggregationTypeUnspecified = "STRING_AGGREGATION_TYPE_UNSPECIFIED",
    MajorityVote = "MAJORITY_VOTE",
    UnanimousVote = "UNANIMOUS_VOTE",
    NoAggregation = "NO_AGGREGATION"
}


// GoogleCloudDatalabelingV1beta1ImageClassificationConfig
/** 
 * Config for image classification human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1ImageClassificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMultiLabel" })
  allowMultiLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=answerAggregationType" })
  answerAggregationType?: GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
}
