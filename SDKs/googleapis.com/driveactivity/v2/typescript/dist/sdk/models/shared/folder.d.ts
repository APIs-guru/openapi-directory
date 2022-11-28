import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FolderTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    MyDriveRoot = "MY_DRIVE_ROOT",
    TeamDriveRoot = "TEAM_DRIVE_ROOT",
    StandardFolder = "STANDARD_FOLDER"
}
/**
 * This item is deprecated; please see `DriveFolder` instead.
**/
export declare class Folder extends SpeakeasyBase {
    type?: FolderTypeEnum;
}
