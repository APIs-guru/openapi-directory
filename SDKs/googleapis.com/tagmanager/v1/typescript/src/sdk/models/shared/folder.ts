import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Folder
/** 
 * Represents a Google Tag Manager Folder.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=folderId" })
  folderId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
