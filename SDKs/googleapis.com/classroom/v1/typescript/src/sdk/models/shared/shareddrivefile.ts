import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFile } from "./drivefile";

export enum SharedDriveFileShareModeEnum {
    UnknownShareMode = "UNKNOWN_SHARE_MODE"
,    View = "VIEW"
,    Edit = "EDIT"
,    StudentCopy = "STUDENT_COPY"
}


// SharedDriveFile
/** 
 * Drive file that is used as material for course work.
**/
export class SharedDriveFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @Metadata({ data: "json, name=shareMode" })
  shareMode?: SharedDriveFileShareModeEnum;
}
