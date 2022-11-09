import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspaceIdMembersMemberIdIdentitiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Identity;

  @Metadata()
  security: PostWorkspaceIdMembersMemberIdIdentitiesSecurity;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
