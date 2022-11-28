import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SourcesGetV2SourcesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.SourcesOrderEnum;

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


export class SourcesGetV2SourcesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SourcesGetV2SourcesGetQueryParams;
}


export class SourcesGetV2SourcesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqResult?: shared.OpenAqResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
