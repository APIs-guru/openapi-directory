import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams extends SpeakeasyBase {
    id: string;
    memberId: string;
    workspaceId: string;
}
export declare class DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams;
    security: DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}
export declare class DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
