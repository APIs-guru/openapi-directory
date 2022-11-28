import { SpeakeasyBase } from "../../../internal/utils";
import { ScanConfig } from "./scanconfig";
/**
 * Response for the `ListScanConfigs` method.
**/
export declare class ListScanConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    scanConfigs?: ScanConfig[];
}
