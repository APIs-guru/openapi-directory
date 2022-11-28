import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CitiesGetv1V1CitiesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.CitiesOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class CitiesGetv1V1CitiesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CitiesGetv1V1CitiesGetQueryParams;
}


export class CitiesGetv1V1CitiesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqCitiesResult?: shared.OpenAqCitiesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
