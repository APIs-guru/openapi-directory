import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigdecaycurveautomatedstoppingconfig";
import { GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigmedianautomatedstoppingconfig";
/**
 * Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
**/
export declare class GoogleCloudMlV1AutomatedStoppingConfig extends SpeakeasyBase {
    decayCurveStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig;
    medianAutomatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig;
}
