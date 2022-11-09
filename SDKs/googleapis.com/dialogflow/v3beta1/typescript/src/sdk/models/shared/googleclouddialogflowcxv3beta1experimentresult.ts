import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3beta1experimentresultversionmetrics";


// GoogleCloudDialogflowCxV3beta1ExperimentResult
/** 
 * The inference result which includes an objective metric to optimize and the confidence interval.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=versionMetrics", elemType: shared.GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics })
  versionMetrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[];
}
