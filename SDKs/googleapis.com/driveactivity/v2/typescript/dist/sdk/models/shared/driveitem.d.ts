import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";
import { Owner } from "./owner";
/**
 * A Drive item, such as a file or folder.
**/
export declare class DriveItem extends SpeakeasyBase {
    driveFile?: Map<string, any>;
    driveFolder?: DriveFolder;
    file?: Map<string, any>;
    folder?: Folder;
    mimeType?: string;
    name?: string;
    owner?: Owner;
    title?: string;
}
