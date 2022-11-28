import { SpeakeasyBase } from "../../../internal/utils";
import { TeamDrive } from "./teamdrive";
/**
 * A list of Team Drives.
**/
export declare class TeamDriveList extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    teamDrives?: TeamDrive[];
}
