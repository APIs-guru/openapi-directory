import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2EvaluationConfig } from "./googleclouddialogflowv2evaluationconfig";
import { GoogleCloudDialogflowV2SmartReplyMetrics } from "./googleclouddialogflowv2smartreplymetrics";


// GoogleCloudDialogflowV2ConversationModelEvaluation
/** 
 * Represents evaluation result of a conversation model.
**/
export class GoogleCloudDialogflowV2ConversationModelEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=evaluationConfig" })
  evaluationConfig?: GoogleCloudDialogflowV2EvaluationConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=smartReplyMetrics" })
  smartReplyMetrics?: GoogleCloudDialogflowV2SmartReplyMetrics;
}
