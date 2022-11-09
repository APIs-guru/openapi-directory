import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdMembersMemberIdNotesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdMembersMemberIdNotesPathParams;

  @Metadata()
  queryParams: GetWorkspaceIdMembersMemberIdNotesQueryParams;

  @Metadata()
  security: GetWorkspaceIdMembersMemberIdNotesSecurity;
}


export class GetWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
