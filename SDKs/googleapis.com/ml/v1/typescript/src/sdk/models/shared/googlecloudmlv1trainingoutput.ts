import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutput } from "./googlecloudmlv1hyperparameteroutput";



// GoogleCloudMlV1TrainingOutputInput
/** 
 * Represents results of a training job. Output only.
**/
export class GoogleCloudMlV1TrainingOutputInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" })
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;

  @SpeakeasyMetadata({ data: "json, name=completedTrialCount" })
  completedTrialCount?: string;

  @SpeakeasyMetadata({ data: "json, name=consumedMLUnits" })
  consumedMlUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" })
  hyperparameterMetricTag?: string;

  @SpeakeasyMetadata({ data: "json, name=isBuiltInAlgorithmJob" })
  isBuiltInAlgorithmJob?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isHyperparameterTuningJob" })
  isHyperparameterTuningJob?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1HyperparameterOutput })
  trials?: GoogleCloudMlV1HyperparameterOutput[];
}


// GoogleCloudMlV1TrainingOutput
/** 
 * Represents results of a training job. Output only.
**/
export class GoogleCloudMlV1TrainingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" })
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;

  @SpeakeasyMetadata({ data: "json, name=completedTrialCount" })
  completedTrialCount?: string;

  @SpeakeasyMetadata({ data: "json, name=consumedMLUnits" })
  consumedMlUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" })
  hyperparameterMetricTag?: string;

  @SpeakeasyMetadata({ data: "json, name=isBuiltInAlgorithmJob" })
  isBuiltInAlgorithmJob?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isHyperparameterTuningJob" })
  isHyperparameterTuningJob?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1HyperparameterOutput })
  trials?: GoogleCloudMlV1HyperparameterOutput[];

  @SpeakeasyMetadata({ data: "json, name=webAccessUris" })
  webAccessUris?: Map<string, string>;
}
