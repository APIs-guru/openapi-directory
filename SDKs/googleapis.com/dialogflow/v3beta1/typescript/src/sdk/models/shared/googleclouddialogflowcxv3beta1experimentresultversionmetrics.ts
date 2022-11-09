import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultMetric } from "./googleclouddialogflowcxv3beta1experimentresultmetric";


// GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics
/** 
 * Version variant and associated metrics.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudDialogflowCxV3beta1ExperimentResultMetric })
  metrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetric[];

  @Metadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
