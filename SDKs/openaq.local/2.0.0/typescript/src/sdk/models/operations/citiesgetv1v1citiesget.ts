import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CitiesGetv1V1CitiesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.CitiesOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class CitiesGetv1V1CitiesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CitiesGetv1V1CitiesGetQueryParams;
}


export class CitiesGetv1V1CitiesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqCitiesResult?: shared.OpenAqCitiesResult;

  @Metadata()
  statusCode: number;
}
