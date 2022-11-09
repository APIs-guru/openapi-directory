import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFile } from "./drivefile";
export declare enum SharedDriveFileShareModeEnum {
    UnknownShareMode = "UNKNOWN_SHARE_MODE",
    View = "VIEW",
    Edit = "EDIT",
    StudentCopy = "STUDENT_COPY"
}
/**
 * Drive file that is used as material for course work.
**/
export declare class SharedDriveFile extends SpeakeasyBase {
    driveFile?: DriveFile;
    shareMode?: SharedDriveFileShareModeEnum;
}
