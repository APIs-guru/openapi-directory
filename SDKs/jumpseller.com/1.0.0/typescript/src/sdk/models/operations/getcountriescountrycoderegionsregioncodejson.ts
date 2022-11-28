import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountriesCountryCodeRegionsRegionCodeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region_code" })
  regionCode: string;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCountriesCountryCodeRegionsRegionCodeJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams;
}


export class GetCountriesCountryCodeRegionsRegionCodeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  region?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
