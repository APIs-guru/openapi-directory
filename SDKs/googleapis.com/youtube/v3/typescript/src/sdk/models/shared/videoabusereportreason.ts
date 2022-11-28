import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportReasonSnippet } from "./videoabusereportreasonsnippet";



// VideoAbuseReportReason
/** 
 * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
**/
export class VideoAbuseReportReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: VideoAbuseReportReasonSnippet;
}
