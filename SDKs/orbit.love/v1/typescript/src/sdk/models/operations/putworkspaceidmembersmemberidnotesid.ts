import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWorkspaceIdMembersMemberIdNotesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PutWorkspaceIdMembersMemberIdNotesIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PutWorkspaceIdMembersMemberIdNotesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkspaceIdMembersMemberIdNotesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Note;

  @Metadata()
  security: PutWorkspaceIdMembersMemberIdNotesIdSecurity;
}


export class PutWorkspaceIdMembersMemberIdNotesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
