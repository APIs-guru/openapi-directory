import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
import { File } from "./file";
import { TeamDrive } from "./teamdrive";
/**
 * A change to a file or shared drive.
**/
export declare class Change extends SpeakeasyBase {
    changeType?: string;
    drive?: Drive;
    driveId?: string;
    file?: File;
    fileId?: string;
    kind?: string;
    removed?: boolean;
    teamDrive?: TeamDrive;
    teamDriveId?: string;
    time?: Date;
    type?: string;
}
