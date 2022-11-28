import { SpeakeasyBase } from "../../../internal/utils";
import { DriveReference } from "./drivereference";
import { DriveItemReference } from "./driveitemreference";
import { TeamDriveReference } from "./teamdrivereference";
/**
 * A lightweight reference to the target of activity.
**/
export declare class TargetReference extends SpeakeasyBase {
    drive?: DriveReference;
    driveItem?: DriveItemReference;
    teamDrive?: TeamDriveReference;
}
