import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { DriveReference } from "./drivereference";
import { TeamDriveReference } from "./teamdrivereference";
import { User } from "./user";
/**
 * Information about the owner of a Drive item.
**/
export declare class Owner extends SpeakeasyBase {
    domain?: Domain;
    drive?: DriveReference;
    teamDrive?: TeamDriveReference;
    user?: User;
}
