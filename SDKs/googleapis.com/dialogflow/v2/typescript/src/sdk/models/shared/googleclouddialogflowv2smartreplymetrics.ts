import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics } from "./googleclouddialogflowv2smartreplymetricstopnmetrics";



// GoogleCloudDialogflowV2SmartReplyMetrics
/** 
 * The evaluation metrics for smart reply model.
**/
export class GoogleCloudDialogflowV2SmartReplyMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlistCoverage" })
  allowlistCoverage?: number;

  @SpeakeasyMetadata({ data: "json, name=conversationCount" })
  conversationCount?: string;

  @SpeakeasyMetadata({ data: "json, name=topNMetrics", elemType: GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics })
  topNMetrics?: GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics[];
}
