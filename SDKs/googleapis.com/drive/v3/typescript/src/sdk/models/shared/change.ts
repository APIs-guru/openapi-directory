import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";


// Change
/** 
 * A change to a file or shared drive.
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeType" })
  changeType?: string;

  @Metadata({ data: "json, name=drive" })
  drive?: Drive;

  @Metadata({ data: "json, name=driveId" })
  driveId?: string;

  @Metadata({ data: "json, name=file" })
  file?: File;

  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=removed" })
  removed?: boolean;

  @Metadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDrive;

  @Metadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
