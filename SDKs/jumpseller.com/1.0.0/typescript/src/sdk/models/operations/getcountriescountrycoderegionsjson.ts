import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountriesCountryCodeRegionsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;
}


export class GetCountriesCountryCodeRegionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeRegionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCountriesCountryCodeRegionsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCountriesCountryCodeRegionsJsonQueryParams;
}


export class GetCountriesCountryCodeRegionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  regions?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
