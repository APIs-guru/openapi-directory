import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare class PostWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PostWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
    pathParams: PostWorkspaceIdMembersMemberIdIdentitiesPathParams;
    request?: shared.Identity;
    security: PostWorkspaceIdMembersMemberIdIdentitiesSecurity;
}
export declare class PostWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
