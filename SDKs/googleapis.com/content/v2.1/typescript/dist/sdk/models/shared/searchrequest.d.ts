import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ReportService.Search method.
**/
export declare class SearchRequest extends SpeakeasyBase {
    pageSize?: number;
    pageToken?: string;
    query?: string;
}
