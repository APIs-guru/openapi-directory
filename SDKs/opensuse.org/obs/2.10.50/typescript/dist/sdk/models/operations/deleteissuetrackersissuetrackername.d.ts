import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
    issueTrackerName: string;
}
export declare class DeleteIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
    pathParams: DeleteIssueTrackersIssueTrackerNamePathParams;
    security: DeleteIssueTrackersIssueTrackerNameSecurity;
}
export declare class DeleteIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
