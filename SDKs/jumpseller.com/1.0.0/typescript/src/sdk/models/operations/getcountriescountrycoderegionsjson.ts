import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCountriesCountryCodeRegionsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;
}


export class GetCountriesCountryCodeRegionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeRegionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCountriesCountryCodeRegionsJsonPathParams;

  @Metadata()
  queryParams: GetCountriesCountryCodeRegionsJsonQueryParams;
}


export class GetCountriesCountryCodeRegionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  regions?: any[];

  @Metadata()
  statusCode: number;
}
