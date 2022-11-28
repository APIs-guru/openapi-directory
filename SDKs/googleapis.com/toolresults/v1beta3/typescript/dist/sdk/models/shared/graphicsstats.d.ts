import { SpeakeasyBase } from "../../../internal/utils";
import { GraphicsStatsBucket } from "./graphicsstatsbucket";
/**
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
**/
export declare class GraphicsStats extends SpeakeasyBase {
    buckets?: GraphicsStatsBucket[];
    highInputLatencyCount?: string;
    jankyFrames?: string;
    missedVsyncCount?: string;
    p50Millis?: string;
    p90Millis?: string;
    p95Millis?: string;
    p99Millis?: string;
    slowBitmapUploadCount?: string;
    slowDrawCount?: string;
    slowUiThreadCount?: string;
    totalFrames?: string;
}
