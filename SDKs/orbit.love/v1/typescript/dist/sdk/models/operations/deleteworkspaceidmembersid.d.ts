import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
    id: string;
    workspaceId: string;
}
export declare class DeleteWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class DeleteWorkspaceIdMembersIdRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspaceIdMembersIdPathParams;
    security: DeleteWorkspaceIdMembersIdSecurity;
}
export declare class DeleteWorkspaceIdMembersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
