import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIPv6PoolsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetIPv6PoolsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetIPv6PoolsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIPv6PoolsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetIPv6PoolsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetIPv6PoolsSecurityOption2;
}


export class GetIPv6PoolsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIPv6PoolsQueryParams;

  @Metadata()
  security: GetIPv6PoolsSecurity;
}


export class GetIPv6Pools200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.IPv6Pool })
  data?: shared.IPv6Pool[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetIPv6PoolsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetIPv6PoolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIPv6Pools200ApplicationJsonObject?: GetIPv6Pools200ApplicationJson;

  @Metadata()
  getIPv6PoolsDefaultApplicationJsonObject?: GetIPv6PoolsDefaultApplicationJson;
}
