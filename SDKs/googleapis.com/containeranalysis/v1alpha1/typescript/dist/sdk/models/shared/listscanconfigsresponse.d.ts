import { SpeakeasyBase } from "../../../internal/utils";
import { ScanConfig } from "./scanconfig";
/**
 * A list of scan configs for the project.
**/
export declare class ListScanConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    scanConfigs?: ScanConfig[];
}
