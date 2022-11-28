import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare class PostWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class PostWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
    pathParams: PostWorkspaceIdMembersMemberIdNotesPathParams;
    request?: shared.Note;
    security: PostWorkspaceIdMembersMemberIdNotesSecurity;
}
export declare class PostWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
