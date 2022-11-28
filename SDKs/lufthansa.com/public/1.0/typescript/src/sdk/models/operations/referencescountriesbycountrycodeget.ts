import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesCountriesByCountryCodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" })
  countryCode: string;
}


export class ReferencesCountriesByCountryCodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesCountriesByCountryCodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesCountriesByCountryCodeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesCountriesByCountryCodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesCountriesByCountryCodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesCountriesByCountryCodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesCountriesByCountryCodeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesCountriesByCountryCodeGetSecurity;
}


export class ReferencesCountriesByCountryCodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referencesCountriesByCountryCodeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
