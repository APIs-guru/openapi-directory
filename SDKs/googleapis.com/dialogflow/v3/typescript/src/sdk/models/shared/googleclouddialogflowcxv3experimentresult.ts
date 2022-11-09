import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3experimentresultversionmetrics";


// GoogleCloudDialogflowCxV3ExperimentResult
/** 
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export class GoogleCloudDialogflowCxV3ExperimentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=versionMetrics", elemType: shared.GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics })
  versionMetrics?: GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics[];
}
