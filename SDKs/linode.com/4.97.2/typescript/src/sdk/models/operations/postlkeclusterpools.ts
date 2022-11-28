import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLkeClusterPoolsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class PostLkeClusterPoolsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: shared.Items })
  disks?: shared.Items[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class PostLkeClusterPoolsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class PostLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostLkeClusterPoolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLkeClusterPoolsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostLkeClusterPoolsRequestBody;

  @SpeakeasyMetadata()
  security: PostLkeClusterPoolsSecurity;
}


export class PostLkeClusterPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lkeNodePool?: shared.LkeNodePool;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postLkeClusterPoolsDefaultApplicationJsonObject?: PostLkeClusterPoolsDefaultApplicationJson;
}
