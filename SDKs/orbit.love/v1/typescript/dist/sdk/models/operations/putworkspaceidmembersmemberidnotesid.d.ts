import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutWorkspaceIdMembersMemberIdNotesIdPathParams extends SpeakeasyBase {
    id: string;
    memberId: string;
    workspaceId: string;
}
export declare class PutWorkspaceIdMembersMemberIdNotesIdSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PutWorkspaceIdMembersMemberIdNotesIdRequest extends SpeakeasyBase {
    pathParams: PutWorkspaceIdMembersMemberIdNotesIdPathParams;
    request?: shared.Note;
    security: PutWorkspaceIdMembersMemberIdNotesIdSecurity;
}
export declare class PutWorkspaceIdMembersMemberIdNotesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
