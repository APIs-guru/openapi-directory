import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveReference } from "./drivereference";
import { DriveItemReference } from "./driveitemreference";
import { TeamDriveReference } from "./teamdrivereference";



// TargetReference
/** 
 * A lightweight reference to the target of activity.
**/
export class TargetReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drive" })
  drive?: DriveReference;

  @SpeakeasyMetadata({ data: "json, name=driveItem" })
  driveItem?: DriveItemReference;

  @SpeakeasyMetadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDriveReference;
}
