import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
/** 
 * Provides details for how an evaluation job sends email alerts based on the results of a run.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=minAcceptableMeanAveragePrecision" })
  minAcceptableMeanAveragePrecision?: number;
}
