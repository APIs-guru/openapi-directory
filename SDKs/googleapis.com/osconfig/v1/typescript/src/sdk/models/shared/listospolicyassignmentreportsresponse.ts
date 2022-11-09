import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentReport } from "./ospolicyassignmentreport";


// ListOsPolicyAssignmentReportsResponse
/** 
 * A response message for listing OS Policy assignment reports including the page of results and page token.
**/
export class ListOsPolicyAssignmentReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=osPolicyAssignmentReports", elemType: shared.OsPolicyAssignmentReport })
  osPolicyAssignmentReports?: OsPolicyAssignmentReport[];
}
