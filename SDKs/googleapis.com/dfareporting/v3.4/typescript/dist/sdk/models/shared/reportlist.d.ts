import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Represents the list of reports.
**/
export declare class ReportList extends SpeakeasyBase {
    etag?: string;
    items?: Report[];
    kind?: string;
    nextPageToken?: string;
}
