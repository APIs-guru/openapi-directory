import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CountriesGetV2CountriesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

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


export class CountriesGetV2CountriesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CountriesGetV2CountriesGetQueryParams;
}


export class CountriesGetV2CountriesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqCountriesResult?: shared.OpenAqCountriesResult;

  @Metadata()
  statusCode: number;
}
