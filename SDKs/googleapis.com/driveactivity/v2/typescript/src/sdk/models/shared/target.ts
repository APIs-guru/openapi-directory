import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Drive } from "./drive";
import { DriveItem } from "./driveitem";
import { FileComment } from "./filecomment";
import { TeamDrive } from "./teamdrive";


// Target
/** 
 * Information about the target of activity.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=drive" })
  drive?: Drive;

  @Metadata({ data: "json, name=driveItem" })
  driveItem?: DriveItem;

  @Metadata({ data: "json, name=fileComment" })
  fileComment?: FileComment;

  @Metadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDrive;
}
