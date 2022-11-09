import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLkeClusterRecyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class PostLkeClusterRecycleSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PostLkeClusterRecycleSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PostLkeClusterRecycleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostLkeClusterRecycleSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostLkeClusterRecycleSecurityOption2;
}


export class PostLkeClusterRecycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLkeClusterRecyclePathParams;

  @Metadata()
  security: PostLkeClusterRecycleSecurity;
}


export class PostLkeClusterRecycleDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterRecycleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postLkeClusterRecycle200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  postLkeClusterRecycleDefaultApplicationJsonObject?: PostLkeClusterRecycleDefaultApplicationJson;
}
