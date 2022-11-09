import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";


// ListReportsResponse
/** 
 * Response message for ReportingService.ListReports.
**/
export class ListReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reports", elemType: shared.Report })
  reports?: Report[];
}
