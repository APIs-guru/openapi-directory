import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { DriveItem } from "./driveitem";
import { FileComment } from "./filecomment";
import { TeamDrive } from "./teamdrive";
/**
 * Information about the target of activity.
**/
export declare class Target extends SpeakeasyBase {
    drive?: Drive;
    driveItem?: DriveItem;
    fileComment?: FileComment;
    teamDrive?: TeamDrive;
}
