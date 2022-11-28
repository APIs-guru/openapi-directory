import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1ErrorIssue } from "./googleplaydeveloperreportingv1alpha1errorissue";
/**
 * Response with a paginated list of issues that matched the request.
**/
export declare class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse extends SpeakeasyBase {
    errorIssues?: GooglePlayDeveloperReportingV1alpha1ErrorIssue[];
    nextPageToken?: string;
}
