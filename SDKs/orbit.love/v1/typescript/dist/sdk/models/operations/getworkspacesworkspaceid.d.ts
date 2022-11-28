import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceIdPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class GetWorkspacesWorkspaceIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspacesWorkspaceIdRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceIdPathParams;
    security: GetWorkspacesWorkspaceIdSecurity;
}
export declare class GetWorkspacesWorkspaceIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
