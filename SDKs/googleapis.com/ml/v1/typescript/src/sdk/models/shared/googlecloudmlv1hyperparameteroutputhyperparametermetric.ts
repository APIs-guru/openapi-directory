import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1HyperparameterOutputHyperparameterMetric
/** 
 * An observed value of a metric.
**/
export class GoogleCloudMlV1HyperparameterOutputHyperparameterMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectiveValue" })
  objectiveValue?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingStep" })
  trainingStep?: string;
}
