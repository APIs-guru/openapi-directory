import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GraphicsStatsBucket } from "./graphicsstatsbucket";


// GraphicsStats
/** 
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
**/
export class GraphicsStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.GraphicsStatsBucket })
  buckets?: GraphicsStatsBucket[];

  @Metadata({ data: "json, name=highInputLatencyCount" })
  highInputLatencyCount?: string;

  @Metadata({ data: "json, name=jankyFrames" })
  jankyFrames?: string;

  @Metadata({ data: "json, name=missedVsyncCount" })
  missedVsyncCount?: string;

  @Metadata({ data: "json, name=p50Millis" })
  p50Millis?: string;

  @Metadata({ data: "json, name=p90Millis" })
  p90Millis?: string;

  @Metadata({ data: "json, name=p95Millis" })
  p95Millis?: string;

  @Metadata({ data: "json, name=p99Millis" })
  p99Millis?: string;

  @Metadata({ data: "json, name=slowBitmapUploadCount" })
  slowBitmapUploadCount?: string;

  @Metadata({ data: "json, name=slowDrawCount" })
  slowDrawCount?: string;

  @Metadata({ data: "json, name=slowUiThreadCount" })
  slowUiThreadCount?: string;

  @Metadata({ data: "json, name=totalFrames" })
  totalFrames?: string;
}
