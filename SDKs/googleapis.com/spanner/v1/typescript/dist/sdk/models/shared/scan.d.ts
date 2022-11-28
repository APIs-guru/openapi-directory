import { SpeakeasyBase } from "../../../internal/utils";
import { ScanData } from "./scandata";
/**
 * Scan is a structure which describes Cloud Key Visualizer scan information.
**/
export declare class Scan extends SpeakeasyBase {
    details?: Map<string, any>;
    endTime?: string;
    name?: string;
    scanData?: ScanData;
    startTime?: string;
}
