import { SpeakeasyBase } from "../../../internal/utils";
import { Scan } from "./scan";
/**
 * Response method from the ListScans method.
**/
export declare class ListScansResponse extends SpeakeasyBase {
    nextPageToken?: string;
    scans?: Scan[];
}
