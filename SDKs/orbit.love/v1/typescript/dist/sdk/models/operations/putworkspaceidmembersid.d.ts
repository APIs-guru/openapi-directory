import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
    id: string;
    workspaceId: string;
}
export declare class PutWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PutWorkspaceIdMembersIdRequest extends SpeakeasyBase {
    pathParams: PutWorkspaceIdMembersIdPathParams;
    request?: shared.Member;
    security: PutWorkspaceIdMembersIdSecurity;
}
export declare class PutWorkspaceIdMembersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
