import { SpeakeasyBase } from "../../../internal/utils";
import { ReportType } from "./reporttype";
/**
 * Response message for ReportingService.ListReportTypes.
**/
export declare class ListReportTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reportTypes?: ReportType[];
}
