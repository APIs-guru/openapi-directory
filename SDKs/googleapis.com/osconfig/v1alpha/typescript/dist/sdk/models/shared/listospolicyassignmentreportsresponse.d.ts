import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReport } from "./ospolicyassignmentreport";
/**
 * A response message for listing OS Policy assignment reports including the page of results and page token.
**/
export declare class ListOsPolicyAssignmentReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    osPolicyAssignmentReports?: OsPolicyAssignmentReport[];
}
