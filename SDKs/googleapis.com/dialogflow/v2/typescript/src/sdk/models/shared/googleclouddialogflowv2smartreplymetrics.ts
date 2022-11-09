import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics } from "./googleclouddialogflowv2smartreplymetricstopnmetrics";


// GoogleCloudDialogflowV2SmartReplyMetrics
/** 
 * The evaluation metrics for smart reply model.
**/
export class GoogleCloudDialogflowV2SmartReplyMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowlistCoverage" })
  allowlistCoverage?: number;

  @Metadata({ data: "json, name=conversationCount" })
  conversationCount?: string;

  @Metadata({ data: "json, name=topNMetrics", elemType: shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics })
  topNMetrics?: GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics[];
}
