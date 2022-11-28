import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";
/**
 * Representation of a change to a file or shared drive.
**/
export declare class Change extends SpeakeasyBase {
    changeType?: string;
    deleted?: boolean;
    drive?: Drive;
    driveId?: string;
    file?: File;
    fileId?: string;
    id?: string;
    kind?: string;
    modificationDate?: Date;
    selfLink?: string;
    teamDrive?: TeamDrive;
    teamDriveId?: string;
    type?: string;
}
