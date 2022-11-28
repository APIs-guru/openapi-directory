import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspacesRequest extends SpeakeasyBase {
    security: GetWorkspacesSecurity;
}
export declare class GetWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
