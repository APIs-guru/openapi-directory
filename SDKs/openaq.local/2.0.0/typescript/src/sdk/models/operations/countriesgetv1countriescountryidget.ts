import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CountriesGetV1CountriesCountryIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country_id" })
  countryId: string;
}


export class CountriesGetV1CountriesCountryIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.CountriesOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class CountriesGetV1CountriesCountryIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CountriesGetV1CountriesCountryIdGetPathParams;

  @Metadata()
  queryParams: CountriesGetV1CountriesCountryIdGetQueryParams;
}


export class CountriesGetV1CountriesCountryIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqCountriesResult?: shared.OpenAqCountriesResult;

  @Metadata()
  statusCode: number;
}
