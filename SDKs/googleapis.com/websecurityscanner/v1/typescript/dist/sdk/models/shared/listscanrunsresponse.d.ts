import { SpeakeasyBase } from "../../../internal/utils";
import { ScanRun } from "./scanrun";
/**
 * Response for the `ListScanRuns` method.
**/
export declare class ListScanRunsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    scanRuns?: ScanRun[];
}
