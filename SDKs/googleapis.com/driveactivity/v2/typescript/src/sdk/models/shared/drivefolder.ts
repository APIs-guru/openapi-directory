import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DriveFolderTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    MyDriveRoot = "MY_DRIVE_ROOT"
,    SharedDriveRoot = "SHARED_DRIVE_ROOT"
,    StandardFolder = "STANDARD_FOLDER"
}


// DriveFolder
/** 
 * A Drive item which is a folder.
**/
export class DriveFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: DriveFolderTypeEnum;
}
