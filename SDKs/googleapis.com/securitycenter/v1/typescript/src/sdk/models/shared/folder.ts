import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Folder
/** 
 * Message that contains the resource name and display name of a folder resource.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceFolder" })
  resourceFolder?: string;

  @Metadata({ data: "json, name=resourceFolderDisplayName" })
  resourceFolderDisplayName?: string;
}
