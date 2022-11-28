import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRow } from "./reportrow";
/**
 * Response message for the ReportService.Search method.
**/
export declare class SearchResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: ReportRow[];
}
