import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Response message for ReportingService.ListReports.
**/
export declare class ListReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reports?: Report[];
}
