import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultMetric } from "./googleclouddialogflowcxv3beta1experimentresultmetric";



// GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics
/** 
 * Version variant and associated metrics.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudDialogflowCxV3beta1ExperimentResultMetric })
  metrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetric[];

  @SpeakeasyMetadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
