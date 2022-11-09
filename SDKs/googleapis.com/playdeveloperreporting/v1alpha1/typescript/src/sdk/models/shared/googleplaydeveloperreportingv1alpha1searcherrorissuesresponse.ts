import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1ErrorIssue } from "./googleplaydeveloperreportingv1alpha1errorissue";


// GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
/** 
 * Response with a paginated list of issues that matched the request.
**/
export class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorIssues", elemType: shared.GooglePlayDeveloperReportingV1alpha1ErrorIssue })
  errorIssues?: GooglePlayDeveloperReportingV1alpha1ErrorIssue[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
