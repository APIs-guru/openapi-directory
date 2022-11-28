import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportType } from "./reporttype";



// ListReportTypesResponse
/** 
 * Response message for ReportingService.ListReportTypes.
**/
export class ListReportTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTypes", elemType: ReportType })
  reportTypes?: ReportType[];
}
