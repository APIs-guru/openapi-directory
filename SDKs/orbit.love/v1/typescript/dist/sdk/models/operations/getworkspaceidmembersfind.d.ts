import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdMembersFindPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class GetWorkspaceIdMembersFindQueryParams extends SpeakeasyBase {
    email?: string;
    github?: string;
    source?: string;
    sourceHost?: string;
    uid?: string;
    username?: string;
}
export declare class GetWorkspaceIdMembersFindSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdMembersFindRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdMembersFindPathParams;
    queryParams: GetWorkspaceIdMembersFindQueryParams;
    security: GetWorkspaceIdMembersFindSecurity;
}
export declare class GetWorkspaceIdMembersFindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
