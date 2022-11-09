import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutIssueTrackersIssueTrackerNamePathParams extends SpeakeasyBase {
    issueTrackerName: string;
}
export declare class PutIssueTrackersIssueTrackerNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutIssueTrackersIssueTrackerNameRequest extends SpeakeasyBase {
    pathParams: PutIssueTrackersIssueTrackerNamePathParams;
    request: Uint8Array;
    security: PutIssueTrackersIssueTrackerNameSecurity;
}
export declare class PutIssueTrackersIssueTrackerNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
