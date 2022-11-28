import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Workspace
/** 
 * Represents a Google Tag Manager Container Workspace.
**/
export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
