import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesCountriesByCountryCodeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;
}


export class ReferencesCountriesByCountryCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesCountriesByCountryCodeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesCountriesByCountryCodeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesCountriesByCountryCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesCountriesByCountryCodeGetPathParams;

  @Metadata()
  queryParams: ReferencesCountriesByCountryCodeGetQueryParams;

  @Metadata()
  headers: ReferencesCountriesByCountryCodeGetHeaders;

  @Metadata()
  security: ReferencesCountriesByCountryCodeGetSecurity;
}


export class ReferencesCountriesByCountryCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referencesCountriesByCountryCodeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
