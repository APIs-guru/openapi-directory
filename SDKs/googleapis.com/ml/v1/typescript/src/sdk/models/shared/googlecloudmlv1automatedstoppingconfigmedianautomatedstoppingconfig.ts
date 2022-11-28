import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig
/** 
 * The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.
**/
export class GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=useElapsedTime" })
  useElapsedTime?: boolean;
}
