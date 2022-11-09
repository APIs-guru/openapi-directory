import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
    id: string;
    memberId: string;
    workspaceId: string;
}
export declare class PutWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PutWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
    pathParams: PutWorkspaceIdMembersMemberIdActivitiesIdPathParams;
    request?: shared.Activity;
    security: PutWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}
export declare class PutWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
