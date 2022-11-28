import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspaceIdMembersPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class PostWorkspaceIdMembersSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PostWorkspaceIdMembersRequest extends SpeakeasyBase {
    pathParams: PostWorkspaceIdMembersPathParams;
    request?: shared.MemberAndIdentity;
    security: PostWorkspaceIdMembersSecurity;
}
export declare class PostWorkspaceIdMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
