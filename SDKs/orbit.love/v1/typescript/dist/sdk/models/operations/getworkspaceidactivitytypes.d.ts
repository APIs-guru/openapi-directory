import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdActivityTypesPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class GetWorkspaceIdActivityTypesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdActivityTypesRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdActivityTypesPathParams;
    security: GetWorkspaceIdActivityTypesSecurity;
}
export declare class GetWorkspaceIdActivityTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
