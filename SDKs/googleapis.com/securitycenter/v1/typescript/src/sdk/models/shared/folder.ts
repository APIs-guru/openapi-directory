import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Folder
/** 
 * Message that contains the resource name and display name of a folder resource.
**/
export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceFolder" })
  resourceFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceFolderDisplayName" })
  resourceFolderDisplayName?: string;
}
