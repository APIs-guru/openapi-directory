import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspaceIdMembersMemberIdNotesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Note;

  @Metadata()
  security: PostWorkspaceIdMembersMemberIdNotesSecurity;
}


export class PostWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
