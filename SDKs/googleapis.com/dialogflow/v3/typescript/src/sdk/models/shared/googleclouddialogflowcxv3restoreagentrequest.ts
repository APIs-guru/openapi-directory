import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum {
    RestoreOptionUnspecified = "RESTORE_OPTION_UNSPECIFIED"
,    Keep = "KEEP"
,    Fallback = "FALLBACK"
}


// GoogleCloudDialogflowCxV3RestoreAgentRequest
/** 
 * The request message for Agents.RestoreAgent.
**/
export class GoogleCloudDialogflowCxV3RestoreAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @Metadata({ data: "json, name=agentUri" })
  agentUri?: string;

  @Metadata({ data: "json, name=restoreOption" })
  restoreOption?: GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum;
}
