import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWorkspaceIdMembersMemberIdNotesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Note;

  @SpeakeasyMetadata()
  security: PostWorkspaceIdMembersMemberIdNotesSecurity;
}


export class PostWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
