import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
/** 
 * Provides details for how an evaluation job sends email alerts based on the results of a run.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=minAcceptableMeanAveragePrecision" })
  minAcceptableMeanAveragePrecision?: number;
}
