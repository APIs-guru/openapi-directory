import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWorkspaceIdMembersMemberIdNotesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PutWorkspaceIdMembersMemberIdNotesIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PutWorkspaceIdMembersMemberIdNotesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWorkspaceIdMembersMemberIdNotesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Note;

  @SpeakeasyMetadata()
  security: PutWorkspaceIdMembersMemberIdNotesIdSecurity;
}


export class PutWorkspaceIdMembersMemberIdNotesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
