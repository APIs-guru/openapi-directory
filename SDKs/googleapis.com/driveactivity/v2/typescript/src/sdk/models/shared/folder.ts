import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FolderTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    MyDriveRoot = "MY_DRIVE_ROOT"
,    TeamDriveRoot = "TEAM_DRIVE_ROOT"
,    StandardFolder = "STANDARD_FOLDER"
}


// Folder
/** 
 * This item is deprecated; please see `DriveFolder` instead.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: FolderTypeEnum;
}
