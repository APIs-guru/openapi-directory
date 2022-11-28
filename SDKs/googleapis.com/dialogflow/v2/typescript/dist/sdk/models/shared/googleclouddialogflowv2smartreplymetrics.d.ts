import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics } from "./googleclouddialogflowv2smartreplymetricstopnmetrics";
/**
 * The evaluation metrics for smart reply model.
**/
export declare class GoogleCloudDialogflowV2SmartReplyMetrics extends SpeakeasyBase {
    allowlistCoverage?: number;
    conversationCount?: string;
    topNMetrics?: GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics[];
}
