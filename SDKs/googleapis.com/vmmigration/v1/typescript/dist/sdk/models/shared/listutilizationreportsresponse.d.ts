import { SpeakeasyBase } from "../../../internal/utils";
import { UtilizationReport } from "./utilizationreport";
/**
 * Response message for 'ListUtilizationReports' request.
**/
export declare class ListUtilizationReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    unreachable?: string[];
    utilizationReports?: UtilizationReport[];
}
