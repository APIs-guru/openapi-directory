import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoAbuseReportSecondaryReason } from "./videoabusereportsecondaryreason";



// VideoAbuseReportReasonSnippet
/** 
 * Basic details about a video category, such as its localized title.
**/
export class VideoAbuseReportReasonSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryReasons", elemType: VideoAbuseReportSecondaryReason })
  secondaryReasons?: VideoAbuseReportSecondaryReason[];
}
