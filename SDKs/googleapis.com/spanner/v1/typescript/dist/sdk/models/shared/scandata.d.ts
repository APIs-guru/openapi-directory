import { SpeakeasyBase } from "../../../internal/utils";
import { VisualizationData } from "./visualizationdata";
/**
 * ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.
**/
export declare class ScanData extends SpeakeasyBase {
    data?: VisualizationData;
    endTime?: string;
    startTime?: string;
}
