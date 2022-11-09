import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIPv6RangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetIPv6RangesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetIPv6RangesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIPv6RangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetIPv6RangesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetIPv6RangesSecurityOption2;
}


export class GetIPv6RangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIPv6RangesQueryParams;

  @Metadata()
  security: GetIPv6RangesSecurity;
}


export class GetIPv6Ranges200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.IPv6Range })
  data?: shared.IPv6Range[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetIPv6RangesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetIPv6RangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIPv6Ranges200ApplicationJsonObject?: GetIPv6Ranges200ApplicationJson;

  @Metadata()
  getIPv6RangesDefaultApplicationJsonObject?: GetIPv6RangesDefaultApplicationJson;
}
