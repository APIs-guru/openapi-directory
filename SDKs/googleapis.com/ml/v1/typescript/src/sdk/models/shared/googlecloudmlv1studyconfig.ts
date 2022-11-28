import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfig";
import { GoogleCloudMlV1StudyConfigMetricSpec } from "./googlecloudmlv1studyconfigmetricspec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";


export enum GoogleCloudMlV1StudyConfigAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    GaussianProcessBandit = "GAUSSIAN_PROCESS_BANDIT",
    GridSearch = "GRID_SEARCH",
    RandomSearch = "RANDOM_SEARCH"
}


// GoogleCloudMlV1StudyConfig
/** 
 * Represents configuration of a study.
**/
export class GoogleCloudMlV1StudyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: GoogleCloudMlV1StudyConfigAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=automatedStoppingConfig" })
  automatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfig;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudMlV1StudyConfigMetricSpec })
  metrics?: GoogleCloudMlV1StudyConfigMetricSpec[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1StudyConfigParameterSpec })
  parameters?: GoogleCloudMlV1StudyConfigParameterSpec[];
}
