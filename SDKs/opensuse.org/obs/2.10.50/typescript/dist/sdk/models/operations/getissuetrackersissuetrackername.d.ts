import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
    issueTrackerName: string;
}
export declare class GetIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
    pathParams: GetIssueTrackersIssueTrackerNamePathParams;
    security: GetIssueTrackersIssueTrackerNameSecurity;
}
export declare class GetIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
