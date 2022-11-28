import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountriesGetV1CountriesCountryIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_id" })
  countryId: string;
}


export class CountriesGetV1CountriesCountryIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.CountriesOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class CountriesGetV1CountriesCountryIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CountriesGetV1CountriesCountryIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CountriesGetV1CountriesCountryIdGetQueryParams;
}


export class CountriesGetV1CountriesCountryIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqCountriesResult?: shared.OpenAqCountriesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
