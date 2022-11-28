import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3beta1experimentresultversionmetrics";



// GoogleCloudDialogflowCxV3beta1ExperimentResult
/** 
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionMetrics", elemType: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics })
  versionMetrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[];
}
