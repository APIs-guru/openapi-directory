import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportType } from "./reporttype";


// ListReportTypesResponse
/** 
 * Response message for ReportingService.ListReportTypes.
**/
export class ListReportTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reportTypes", elemType: shared.ReportType })
  reportTypes?: ReportType[];
}
