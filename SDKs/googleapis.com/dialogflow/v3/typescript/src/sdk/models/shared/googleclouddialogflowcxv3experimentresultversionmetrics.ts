import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ExperimentResultMetric } from "./googleclouddialogflowcxv3experimentresultmetric";


// GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics
/** 
 * Version variant and associated metrics.
**/
export class GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudDialogflowCxV3ExperimentResultMetric })
  metrics?: GoogleCloudDialogflowCxV3ExperimentResultMetric[];

  @Metadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
