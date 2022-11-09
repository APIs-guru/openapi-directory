import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspaceIdMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspaceIdMembersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.MemberAndIdentity;

  @Metadata()
  security: PostWorkspaceIdMembersSecurity;
}


export class PostWorkspaceIdMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
