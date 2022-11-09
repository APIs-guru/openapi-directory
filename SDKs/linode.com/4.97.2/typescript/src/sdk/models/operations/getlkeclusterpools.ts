import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClusterPoolsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterPoolsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClusterPoolsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClusterPoolsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClusterPoolsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClusterPoolsSecurityOption2;
}


export class GetLkeClusterPoolsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeClusterPoolsPathParams;

  @Metadata()
  security: GetLkeClusterPoolsSecurity;
}


export class GetLkeClusterPools200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LkeNodePool })
  data?: shared.LkeNodePool[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterPoolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusterPools200ApplicationJsonObject?: GetLkeClusterPools200ApplicationJson;

  @Metadata()
  getLkeClusterPoolsDefaultApplicationJsonObject?: GetLkeClusterPoolsDefaultApplicationJson;
}
