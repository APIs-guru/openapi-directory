import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLkeClusterRecyclePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class PostLkeClusterRecycleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class PostLkeClusterRecycleDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterRecycleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLkeClusterRecyclePathParams;

  @SpeakeasyMetadata()
  security: PostLkeClusterRecycleSecurity;
}


export class PostLkeClusterRecycleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postLkeClusterRecycle200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  postLkeClusterRecycleDefaultApplicationJsonObject?: PostLkeClusterRecycleDefaultApplicationJson;
}
