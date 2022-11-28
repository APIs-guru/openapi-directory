import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
/**
 * A list of shared drives.
**/
export declare class DriveList extends SpeakeasyBase {
    drives?: Drive[];
    kind?: string;
    nextPageToken?: string;
}
