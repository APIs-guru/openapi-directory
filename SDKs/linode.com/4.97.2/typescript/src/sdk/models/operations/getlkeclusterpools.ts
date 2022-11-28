import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeClusterPoolsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterPoolsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLkeClusterPools200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LkeNodePool })
  data?: shared.LkeNodePool[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterPoolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeClusterPoolsPathParams;

  @SpeakeasyMetadata()
  security: GetLkeClusterPoolsSecurity;
}


export class GetLkeClusterPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLkeClusterPools200ApplicationJsonObject?: GetLkeClusterPools200ApplicationJson;

  @SpeakeasyMetadata()
  getLkeClusterPoolsDefaultApplicationJsonObject?: GetLkeClusterPoolsDefaultApplicationJson;
}
