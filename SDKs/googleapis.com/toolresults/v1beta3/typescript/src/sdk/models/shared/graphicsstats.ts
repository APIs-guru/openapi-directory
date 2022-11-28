import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GraphicsStatsBucket } from "./graphicsstatsbucket";



// GraphicsStats
/** 
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
**/
export class GraphicsStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: GraphicsStatsBucket })
  buckets?: GraphicsStatsBucket[];

  @SpeakeasyMetadata({ data: "json, name=highInputLatencyCount" })
  highInputLatencyCount?: string;

  @SpeakeasyMetadata({ data: "json, name=jankyFrames" })
  jankyFrames?: string;

  @SpeakeasyMetadata({ data: "json, name=missedVsyncCount" })
  missedVsyncCount?: string;

  @SpeakeasyMetadata({ data: "json, name=p50Millis" })
  p50Millis?: string;

  @SpeakeasyMetadata({ data: "json, name=p90Millis" })
  p90Millis?: string;

  @SpeakeasyMetadata({ data: "json, name=p95Millis" })
  p95Millis?: string;

  @SpeakeasyMetadata({ data: "json, name=p99Millis" })
  p99Millis?: string;

  @SpeakeasyMetadata({ data: "json, name=slowBitmapUploadCount" })
  slowBitmapUploadCount?: string;

  @SpeakeasyMetadata({ data: "json, name=slowDrawCount" })
  slowDrawCount?: string;

  @SpeakeasyMetadata({ data: "json, name=slowUiThreadCount" })
  slowUiThreadCount?: string;

  @SpeakeasyMetadata({ data: "json, name=totalFrames" })
  totalFrames?: string;
}
