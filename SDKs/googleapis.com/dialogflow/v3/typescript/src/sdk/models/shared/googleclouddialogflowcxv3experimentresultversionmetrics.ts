import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultMetric } from "./googleclouddialogflowcxv3experimentresultmetric";



// GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics
/** 
 * Version variant and associated metrics.
**/
export class GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudDialogflowCxV3ExperimentResultMetric })
  metrics?: GoogleCloudDialogflowCxV3ExperimentResultMetric[];

  @SpeakeasyMetadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
