import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkspaceIdActivitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PostWorkspaceIdActivitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PostWorkspaceIdActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWorkspaceIdActivitiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ActivityAndIdentity;

  @SpeakeasyMetadata()
  security: PostWorkspaceIdActivitiesSecurity;
}


export class PostWorkspaceIdActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
