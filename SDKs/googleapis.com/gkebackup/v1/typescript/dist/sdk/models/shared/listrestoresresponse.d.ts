import { SpeakeasyBase } from "../../../internal/utils";
import { Restore } from "./restore";
/**
 * Response message for ListRestores.
**/
export declare class ListRestoresResponse extends SpeakeasyBase {
    nextPageToken?: string;
    restores?: Restore[];
    unreachable?: string[];
}
