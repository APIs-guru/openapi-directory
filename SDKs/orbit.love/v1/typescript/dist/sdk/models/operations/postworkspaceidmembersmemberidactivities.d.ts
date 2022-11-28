import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspaceIdMembersMemberIdActivitiesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare class PostWorkspaceIdMembersMemberIdActivitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PostWorkspaceIdMembersMemberIdActivitiesRequest extends SpeakeasyBase {
    pathParams: PostWorkspaceIdMembersMemberIdActivitiesPathParams;
    request?: any;
    security: PostWorkspaceIdMembersMemberIdActivitiesSecurity;
}
export declare class PostWorkspaceIdMembersMemberIdActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
