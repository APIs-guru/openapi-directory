import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EvaluationConfig } from "./googleclouddialogflowv2evaluationconfig";
import { GoogleCloudDialogflowV2SmartReplyMetrics } from "./googleclouddialogflowv2smartreplymetrics";



// GoogleCloudDialogflowV2ConversationModelEvaluation
/** 
 * Represents evaluation result of a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModelEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationConfig" })
  evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyMetrics" })
  smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}


// GoogleCloudDialogflowV2ConversationModelEvaluationInput
/** 
 * Represents evaluation result of a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModelEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationConfig" })
  evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smartReplyMetrics" })
  smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
