import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";
/**
 * Information about a shared drive.
**/
export declare class Drive extends SpeakeasyBase {
    name?: string;
    root?: DriveItem;
    title?: string;
}
