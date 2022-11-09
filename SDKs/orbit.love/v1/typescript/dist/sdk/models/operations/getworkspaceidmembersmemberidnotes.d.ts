import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare class GetWorkspaceIdMembersMemberIdNotesQueryParams extends SpeakeasyBase {
    page?: string;
}
export declare class GetWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdMembersMemberIdNotesPathParams;
    queryParams: GetWorkspaceIdMembersMemberIdNotesQueryParams;
    security: GetWorkspaceIdMembersMemberIdNotesSecurity;
}
export declare class GetWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
