import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";


// Change
/** 
 * Representation of a change to a file or shared drive.
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeType" })
  changeType?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=drive" })
  drive?: Drive;

  @Metadata({ data: "json, name=driveId" })
  driveId?: string;

  @Metadata({ data: "json, name=file" })
  file?: File;

  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDrive;

  @Metadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
