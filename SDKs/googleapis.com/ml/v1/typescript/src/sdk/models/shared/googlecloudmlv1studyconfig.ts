import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1AutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfig";
import { GoogleCloudMlV1StudyConfigMetricSpec } from "./googlecloudmlv1studyconfigmetricspec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";

export enum GoogleCloudMlV1StudyConfigAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED"
,    GaussianProcessBandit = "GAUSSIAN_PROCESS_BANDIT"
,    GridSearch = "GRID_SEARCH"
,    RandomSearch = "RANDOM_SEARCH"
}


// GoogleCloudMlV1StudyConfig
/** 
 * Represents configuration of a study.
**/
export class GoogleCloudMlV1StudyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: GoogleCloudMlV1StudyConfigAlgorithmEnum;

  @Metadata({ data: "json, name=automatedStoppingConfig" })
  automatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfig;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudMlV1StudyConfigMetricSpec })
  metrics?: GoogleCloudMlV1StudyConfigMetricSpec[];

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudMlV1StudyConfigParameterSpec })
  parameters?: GoogleCloudMlV1StudyConfigParameterSpec[];
}
