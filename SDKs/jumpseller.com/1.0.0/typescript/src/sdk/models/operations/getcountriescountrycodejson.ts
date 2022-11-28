import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountriesCountryCodeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_code" })
  countryCode: string;
}


export class GetCountriesCountryCodeJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesCountryCodeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCountriesCountryCodeJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCountriesCountryCodeJsonQueryParams;
}


export class GetCountriesCountryCodeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  country?: any;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
