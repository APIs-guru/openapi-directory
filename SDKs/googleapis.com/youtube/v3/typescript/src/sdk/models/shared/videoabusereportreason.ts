import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoAbuseReportReasonSnippet } from "./videoabusereportreasonsnippet";


// VideoAbuseReportReason
/** 
 * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
**/
export class VideoAbuseReportReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: VideoAbuseReportReasonSnippet;
}
