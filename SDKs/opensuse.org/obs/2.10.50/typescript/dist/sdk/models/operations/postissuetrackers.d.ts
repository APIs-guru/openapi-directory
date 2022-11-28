import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostIssueTrackersSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostIssueTrackersRequest extends SpeakeasyBase {
    request: Uint8Array;
    security: PostIssueTrackersSecurity;
}
export declare class PostIssueTrackersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
