import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParametersGetv1V1ParametersGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceId" })
  sourceId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceSlug" })
  sourceSlug?: string[];
}


export class ParametersGetv1V1ParametersGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ParametersGetv1V1ParametersGetQueryParams;
}


export class ParametersGetv1V1ParametersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqParametersResult?: shared.OpenAqParametersResult;

  @Metadata()
  statusCode: number;
}
