import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3experimentresultversionmetrics";
/**
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export declare class GoogleCloudDialogflowCxV3ExperimentResult extends SpeakeasyBase {
    lastUpdateTime?: string;
    versionMetrics?: GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics[];
}
