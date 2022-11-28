import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigdecaycurveautomatedstoppingconfig";
import { GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigmedianautomatedstoppingconfig";



// GoogleCloudMlV1AutomatedStoppingConfig
/** 
 * Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
**/
export class GoogleCloudMlV1AutomatedStoppingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decayCurveStoppingConfig" })
  decayCurveStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig;

  @SpeakeasyMetadata({ data: "json, name=medianAutomatedStoppingConfig" })
  medianAutomatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig;
}
