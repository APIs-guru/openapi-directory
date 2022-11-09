import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoAbuseReportSecondaryReason } from "./videoabusereportsecondaryreason";


// VideoAbuseReportReasonSnippet
/** 
 * Basic details about a video category, such as its localized title.
**/
export class VideoAbuseReportReasonSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=secondaryReasons", elemType: shared.VideoAbuseReportSecondaryReason })
  secondaryReasons?: VideoAbuseReportSecondaryReason[];
}
