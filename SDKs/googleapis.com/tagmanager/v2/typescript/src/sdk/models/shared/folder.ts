import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Folder
/** 
 * Represents a Google Tag Manager Folder.
**/
export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=folderId" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
