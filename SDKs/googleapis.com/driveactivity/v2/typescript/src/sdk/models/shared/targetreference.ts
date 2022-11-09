import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveReference } from "./drivereference";
import { DriveItemReference } from "./driveitemreference";
import { TeamDriveReference } from "./teamdrivereference";


// TargetReference
/** 
 * A lightweight reference to the target of activity.
**/
export class TargetReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=drive" })
  drive?: DriveReference;

  @Metadata({ data: "json, name=driveItem" })
  driveItem?: DriveItemReference;

  @Metadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDriveReference;
}
