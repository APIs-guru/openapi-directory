import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { DriveItem } from "./driveitem";
import { FileComment } from "./filecomment";
import { TeamDrive } from "./teamdrive";



// Target
/** 
 * Information about the target of activity.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drive" })
  drive?: Drive;

  @SpeakeasyMetadata({ data: "json, name=driveItem" })
  driveItem?: DriveItem;

  @SpeakeasyMetadata({ data: "json, name=fileComment" })
  fileComment?: FileComment;

  @SpeakeasyMetadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDrive;
}
