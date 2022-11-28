import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3beta1experimentresultversionmetrics";
/**
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export declare class GoogleCloudDialogflowCxV3beta1ExperimentResult extends SpeakeasyBase {
    lastUpdateTime?: string;
    versionMetrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[];
}
