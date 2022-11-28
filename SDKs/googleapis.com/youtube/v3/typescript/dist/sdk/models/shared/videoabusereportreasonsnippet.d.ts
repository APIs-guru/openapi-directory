import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportSecondaryReason } from "./videoabusereportsecondaryreason";
/**
 * Basic details about a video category, such as its localized title.
**/
export declare class VideoAbuseReportReasonSnippet extends SpeakeasyBase {
    label?: string;
    secondaryReasons?: VideoAbuseReportSecondaryReason[];
}
