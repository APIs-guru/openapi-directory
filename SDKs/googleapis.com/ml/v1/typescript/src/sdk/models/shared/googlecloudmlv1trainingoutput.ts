import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutput } from "./googlecloudmlv1hyperparameteroutput";


// GoogleCloudMlV1TrainingOutput
/** 
 * Represents results of a training job. Output only.
**/
export class GoogleCloudMlV1TrainingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtInAlgorithmOutput" })
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;

  @Metadata({ data: "json, name=completedTrialCount" })
  completedTrialCount?: string;

  @Metadata({ data: "json, name=consumedMLUnits" })
  consumedMlUnits?: number;

  @Metadata({ data: "json, name=hyperparameterMetricTag" })
  hyperparameterMetricTag?: string;

  @Metadata({ data: "json, name=isBuiltInAlgorithmJob" })
  isBuiltInAlgorithmJob?: boolean;

  @Metadata({ data: "json, name=isHyperparameterTuningJob" })
  isHyperparameterTuningJob?: boolean;

  @Metadata({ data: "json, name=trials", elemType: shared.GoogleCloudMlV1HyperparameterOutput })
  trials?: GoogleCloudMlV1HyperparameterOutput[];

  @Metadata({ data: "json, name=webAccessUris" })
  webAccessUris?: Map<string, string>;
}
