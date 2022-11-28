import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";



// Change
/** 
 * A change to a file or shared drive.
**/
export class Change extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeType" })
  changeType?: string;

  @SpeakeasyMetadata({ data: "json, name=drive" })
  drive?: Drive;

  @SpeakeasyMetadata({ data: "json, name=driveId" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: File;

  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=removed" })
  removed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDrive;

  @SpeakeasyMetadata({ data: "json, name=teamDriveId" })
  teamDriveId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
