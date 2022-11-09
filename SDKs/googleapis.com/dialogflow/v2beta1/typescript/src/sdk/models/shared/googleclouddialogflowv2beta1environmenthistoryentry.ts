import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry
/** 
 * Represents an environment history entry.
**/
export class GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
