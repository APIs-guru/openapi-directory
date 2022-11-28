import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry
/** 
 * Represents an environment history entry.
**/
export class GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
