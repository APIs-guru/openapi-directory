import { SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";
/**
 * Information about the progress of some component of job execution.
**/
export declare class ProgressTimeseries extends SpeakeasyBase {
    currentProgress?: number;
    dataPoints?: Point[];
}
