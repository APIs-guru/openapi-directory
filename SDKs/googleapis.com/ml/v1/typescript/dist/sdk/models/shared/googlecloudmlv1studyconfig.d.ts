import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfig";
import { GoogleCloudMlV1StudyConfigMetricSpec } from "./googlecloudmlv1studyconfigmetricspec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";
export declare enum GoogleCloudMlV1StudyConfigAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    GaussianProcessBandit = "GAUSSIAN_PROCESS_BANDIT",
    GridSearch = "GRID_SEARCH",
    RandomSearch = "RANDOM_SEARCH"
}
/**
 * Represents configuration of a study.
**/
export declare class GoogleCloudMlV1StudyConfig extends SpeakeasyBase {
    algorithm?: GoogleCloudMlV1StudyConfigAlgorithmEnum;
    automatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfig;
    metrics?: GoogleCloudMlV1StudyConfigMetricSpec[];
    parameters?: GoogleCloudMlV1StudyConfigParameterSpec[];
}
