import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
    id: string;
    workspaceId: string;
}
export declare class GetWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdMembersIdRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdMembersIdPathParams;
    security: GetWorkspaceIdMembersIdSecurity;
}
export declare class GetWorkspaceIdMembersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
