import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3experimentresultversionmetrics";



// GoogleCloudDialogflowCxV3ExperimentResult
/** 
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export class GoogleCloudDialogflowCxV3ExperimentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionMetrics", elemType: GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics })
  versionMetrics?: GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics[];
}
