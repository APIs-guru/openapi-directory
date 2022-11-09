import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdActivitiesIdPathParams extends SpeakeasyBase {
    id: string;
    workspaceId: string;
}
export declare class GetWorkspaceIdActivitiesIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdActivitiesIdRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdActivitiesIdPathParams;
    security: GetWorkspaceIdActivitiesIdSecurity;
}
export declare class GetWorkspaceIdActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
