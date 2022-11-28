import { SpeakeasyBase } from "../../../internal/utils";
import { Export } from "./export";
/**
 * The exports for a matter.
**/
export declare class ListExportsResponse extends SpeakeasyBase {
    exports?: Export[];
    nextPageToken?: string;
}
