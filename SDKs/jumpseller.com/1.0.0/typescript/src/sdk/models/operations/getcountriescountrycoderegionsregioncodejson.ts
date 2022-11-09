import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCountriesCountryCodeRegionsRegionCodeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region_code" })
  regionCode: string;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCountriesCountryCodeRegionsRegionCodeJsonPathParams;

  @Metadata()
  queryParams: GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  region?: any;

  @Metadata()
  statusCode: number;
}
