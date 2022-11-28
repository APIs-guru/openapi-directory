import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportReasonSnippet } from "./videoabusereportreasonsnippet";
/**
 * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
**/
export declare class VideoAbuseReportReason extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: VideoAbuseReportReasonSnippet;
}
