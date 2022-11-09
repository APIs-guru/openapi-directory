import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Identity;

  @Metadata()
  security: DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity;
}


export class DeleteWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
