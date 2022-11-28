import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountriesGetV2CountriesCountryIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country_id" })
  countryId: string;
}


export class CountriesGetV2CountriesCountryIdGetQueryParams extends SpeakeasyBase {
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


export class CountriesGetV2CountriesCountryIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CountriesGetV2CountriesCountryIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CountriesGetV2CountriesCountryIdGetQueryParams;
}


export class CountriesGetV2CountriesCountryIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqCountriesResult?: shared.OpenAqCountriesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
