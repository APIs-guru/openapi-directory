import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";



// ListReportsResponse
/** 
 * Response message for ReportingService.ListReports.
**/
export class ListReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: Report })
  reports?: Report[];
}
