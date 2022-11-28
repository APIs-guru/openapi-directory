import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1ErrorIssue } from "./googleplaydeveloperreportingv1alpha1errorissue";



// GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
/** 
 * Response with a paginated list of issues that matched the request.
**/
export class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorIssues", elemType: GooglePlayDeveloperReportingV1alpha1ErrorIssue })
  errorIssues?: GooglePlayDeveloperReportingV1alpha1ErrorIssue[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
