import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnapshotPathParams extends SpeakeasyBase {
    language: string;
    projectId: number;
}
export declare class GetSnapshotSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetSnapshotRequest extends SpeakeasyBase {
    pathParams: GetSnapshotPathParams;
    security: GetSnapshotSecurity;
}
export declare class GetSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
