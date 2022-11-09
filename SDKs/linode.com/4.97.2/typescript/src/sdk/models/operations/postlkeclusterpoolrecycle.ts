import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLkeClusterPoolRecyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class PostLkeClusterPoolRecycleSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PostLkeClusterPoolRecycleSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PostLkeClusterPoolRecycleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostLkeClusterPoolRecycleSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostLkeClusterPoolRecycleSecurityOption2;
}


export class PostLkeClusterPoolRecycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLkeClusterPoolRecyclePathParams;

  @Metadata()
  security: PostLkeClusterPoolRecycleSecurity;
}


export class PostLkeClusterPoolRecycleDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterPoolRecycleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postLkeClusterPoolRecycle200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  postLkeClusterPoolRecycleDefaultApplicationJsonObject?: PostLkeClusterPoolRecycleDefaultApplicationJson;
}
