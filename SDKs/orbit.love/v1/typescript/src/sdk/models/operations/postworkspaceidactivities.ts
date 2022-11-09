import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspaceIdActivitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdActivitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspaceIdActivitiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ActivityAndIdentity;

  @Metadata()
  security: PostWorkspaceIdActivitiesSecurity;
}


export class PostWorkspaceIdActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
