import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1HyperparameterOutputHyperparameterMetric
/** 
 * An observed value of a metric.
**/
export class GoogleCloudMlV1HyperparameterOutputHyperparameterMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectiveValue" })
  objectiveValue?: number;

  @Metadata({ data: "json, name=trainingStep" })
  trainingStep?: string;
}
