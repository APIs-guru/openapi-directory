import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EvaluationConfig } from "./googleclouddialogflowv2evaluationconfig";
import { GoogleCloudDialogflowV2SmartReplyMetrics } from "./googleclouddialogflowv2smartreplymetrics";
/**
 * Represents evaluation result of a conversation model.
**/
export declare class GoogleCloudDialogflowV2ConversationModelEvaluation extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
    name?: string;
    smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
/**
 * Represents evaluation result of a conversation model.
**/
export declare class GoogleCloudDialogflowV2ConversationModelEvaluationInput extends SpeakeasyBase {
    displayName?: string;
    evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;
    name?: string;
    smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
