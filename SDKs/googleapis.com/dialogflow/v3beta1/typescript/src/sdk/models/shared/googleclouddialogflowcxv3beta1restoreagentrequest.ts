import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum {
    RestoreOptionUnspecified = "RESTORE_OPTION_UNSPECIFIED"
,    Keep = "KEEP"
,    Fallback = "FALLBACK"
}


// GoogleCloudDialogflowCxV3beta1RestoreAgentRequest
/** 
 * The request message for Agents.RestoreAgent.
**/
export class GoogleCloudDialogflowCxV3beta1RestoreAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @Metadata({ data: "json, name=agentUri" })
  agentUri?: string;

  @Metadata({ data: "json, name=restoreOption" })
  restoreOption?: GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum;
}
