import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutput } from "./googlecloudmlv1hyperparameteroutput";
/**
 * Represents results of a training job. Output only.
**/
export declare class GoogleCloudMlV1TrainingOutputInput extends SpeakeasyBase {
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    completedTrialCount?: string;
    consumedMlUnits?: number;
    hyperparameterMetricTag?: string;
    isBuiltInAlgorithmJob?: boolean;
    isHyperparameterTuningJob?: boolean;
    trials?: GoogleCloudMlV1HyperparameterOutput[];
}
/**
 * Represents results of a training job. Output only.
**/
export declare class GoogleCloudMlV1TrainingOutput extends SpeakeasyBase {
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    completedTrialCount?: string;
    consumedMlUnits?: number;
    hyperparameterMetricTag?: string;
    isBuiltInAlgorithmJob?: boolean;
    isHyperparameterTuningJob?: boolean;
    trials?: GoogleCloudMlV1HyperparameterOutput[];
    webAccessUris?: Map<string, string>;
}
