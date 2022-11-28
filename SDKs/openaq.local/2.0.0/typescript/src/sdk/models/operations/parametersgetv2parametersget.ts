import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParametersGetV2ParametersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceId" })
  sourceId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceSlug" })
  sourceSlug?: string[];
}


export class ParametersGetV2ParametersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ParametersGetV2ParametersGetQueryParams;
}


export class ParametersGetV2ParametersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqParametersResult?: shared.OpenAqParametersResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
