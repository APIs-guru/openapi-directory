import { SpeakeasyBase } from "../../../internal/utils";
import { BasicPerfSampleSeries } from "./basicperfsampleseries";
/**
 * Resource representing a collection of performance samples (or data points)
**/
export declare class PerfSampleSeries extends SpeakeasyBase {
    basicPerfSampleSeries?: BasicPerfSampleSeries;
    executionId?: string;
    historyId?: string;
    projectId?: string;
    sampleSeriesId?: string;
    stepId?: string;
}
