import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspaceIdMembersMemberIdActivitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdMembersMemberIdActivitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdMembersMemberIdActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspaceIdMembersMemberIdActivitiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostWorkspaceIdMembersMemberIdActivitiesSecurity;
}


export class PostWorkspaceIdMembersMemberIdActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
