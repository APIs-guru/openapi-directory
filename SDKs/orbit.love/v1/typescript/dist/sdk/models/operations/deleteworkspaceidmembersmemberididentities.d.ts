import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare class DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class DeleteWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams;
    request?: shared.Identity;
    security: DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity;
}
export declare class DeleteWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
