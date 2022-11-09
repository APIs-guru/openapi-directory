import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams extends SpeakeasyBase {
    issueName: string;
    issueTrackerName: string;
}
export declare class GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest extends SpeakeasyBase {
    pathParams: GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams;
    security: GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity;
}
export declare class GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
