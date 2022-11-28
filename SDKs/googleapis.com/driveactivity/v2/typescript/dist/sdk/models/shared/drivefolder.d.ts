import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DriveFolderTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    MyDriveRoot = "MY_DRIVE_ROOT",
    SharedDriveRoot = "SHARED_DRIVE_ROOT",
    StandardFolder = "STANDARD_FOLDER"
}
/**
 * A Drive item which is a folder.
**/
export declare class DriveFolder extends SpeakeasyBase {
    type?: DriveFolderTypeEnum;
}
