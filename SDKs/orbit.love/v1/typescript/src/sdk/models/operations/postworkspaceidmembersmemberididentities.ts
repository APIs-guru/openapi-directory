import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkspaceIdMembersMemberIdIdentitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWorkspaceIdMembersMemberIdIdentitiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Identity;

  @SpeakeasyMetadata()
  security: PostWorkspaceIdMembersMemberIdIdentitiesSecurity;
}


export class PostWorkspaceIdMembersMemberIdIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
