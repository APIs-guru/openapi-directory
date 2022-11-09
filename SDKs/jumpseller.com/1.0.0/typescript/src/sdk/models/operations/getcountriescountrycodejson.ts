import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCountriesCountryCodeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;
}


export class GetCountriesCountryCodeJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCountriesCountryCodeJsonPathParams;

  @Metadata()
  queryParams: GetCountriesCountryCodeJsonQueryParams;
}


export class GetCountriesCountryCodeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  country?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
