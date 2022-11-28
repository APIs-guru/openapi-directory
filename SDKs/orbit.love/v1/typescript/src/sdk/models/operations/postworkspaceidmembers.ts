import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkspaceIdMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWorkspaceIdMembersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.MemberAndIdentity;

  @SpeakeasyMetadata()
  security: PostWorkspaceIdMembersSecurity;
}


export class PostWorkspaceIdMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
