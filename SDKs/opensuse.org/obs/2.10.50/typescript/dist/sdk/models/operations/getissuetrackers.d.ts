import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIssueTrackersSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetIssueTrackersRequest extends SpeakeasyBase {
    security: GetIssueTrackersSecurity;
}
export declare class GetIssueTrackersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
