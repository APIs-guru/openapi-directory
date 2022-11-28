import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReport } from "./ospolicyassignmentreport";



// ListOsPolicyAssignmentReportsResponse
/** 
 * A response message for listing OS Policy assignment reports including the page of results and page token.
**/
export class ListOsPolicyAssignmentReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyAssignmentReports", elemType: OsPolicyAssignmentReport })
  osPolicyAssignmentReports?: OsPolicyAssignmentReport[];
}
