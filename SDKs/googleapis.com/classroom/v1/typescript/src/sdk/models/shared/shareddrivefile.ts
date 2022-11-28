import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";


export enum SharedDriveFileShareModeEnum {
    UnknownShareMode = "UNKNOWN_SHARE_MODE",
    View = "VIEW",
    Edit = "EDIT",
    StudentCopy = "STUDENT_COPY"
}


// SharedDriveFile
/** 
 * Drive file that is used as material for course work.
**/
export class SharedDriveFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @SpeakeasyMetadata({ data: "json, name=shareMode" })
  shareMode?: SharedDriveFileShareModeEnum;
}
