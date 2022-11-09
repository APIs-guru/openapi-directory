import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostWorkspaceIdActivitiesPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class PostWorkspaceIdActivitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PostWorkspaceIdActivitiesRequest extends SpeakeasyBase {
    pathParams: PostWorkspaceIdActivitiesPathParams;
    request?: shared.ActivityAndIdentity;
    security: PostWorkspaceIdActivitiesSecurity;
}
export declare class PostWorkspaceIdActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
