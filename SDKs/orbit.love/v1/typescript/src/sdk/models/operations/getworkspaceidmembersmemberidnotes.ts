import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceIdMembersMemberIdNotesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdMembersMemberIdNotesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetWorkspaceIdMembersMemberIdNotesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersMemberIdNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceIdMembersMemberIdNotesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspaceIdMembersMemberIdNotesQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspaceIdMembersMemberIdNotesSecurity;
}


export class GetWorkspaceIdMembersMemberIdNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
