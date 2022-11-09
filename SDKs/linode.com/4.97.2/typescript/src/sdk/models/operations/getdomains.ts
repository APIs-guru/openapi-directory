import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetDomainsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDomainsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDomainsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDomainsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDomainsSecurityOption2;
}


export class GetDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsQueryParams;

  @Metadata()
  security: GetDomainsSecurity;
}


export class GetDomains200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Domain })
  data?: shared.Domain[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetDomainsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomains200ApplicationJsonObject?: GetDomains200ApplicationJson;

  @Metadata()
  getDomainsDefaultApplicationJsonObject?: GetDomainsDefaultApplicationJson;
}
