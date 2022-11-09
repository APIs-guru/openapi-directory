import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLkeClusterPoolsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class PostLkeClusterPoolsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=disks", elemType: shared.Items })
  disks?: shared.Items[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class PostLkeClusterPoolsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PostLkeClusterPoolsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PostLkeClusterPoolsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostLkeClusterPoolsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostLkeClusterPoolsSecurityOption2;
}


export class PostLkeClusterPoolsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLkeClusterPoolsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostLkeClusterPoolsRequestBody;

  @Metadata()
  security: PostLkeClusterPoolsSecurity;
}


export class PostLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterPoolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeNodePool?: shared.LkeNodePool;

  @Metadata()
  statusCode: number;

  @Metadata()
  postLkeClusterPoolsDefaultApplicationJsonObject?: PostLkeClusterPoolsDefaultApplicationJson;
}
