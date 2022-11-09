import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLkeClusterNodeRecyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class PostLkeClusterNodeRecycleSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PostLkeClusterNodeRecycleSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PostLkeClusterNodeRecycleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostLkeClusterNodeRecycleSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostLkeClusterNodeRecycleSecurityOption2;
}


export class PostLkeClusterNodeRecycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLkeClusterNodeRecyclePathParams;

  @Metadata()
  security: PostLkeClusterNodeRecycleSecurity;
}


export class PostLkeClusterNodeRecycleDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterNodeRecycleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postLkeClusterNodeRecycle200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  postLkeClusterNodeRecycleDefaultApplicationJsonObject?: PostLkeClusterNodeRecycleDefaultApplicationJson;
}
