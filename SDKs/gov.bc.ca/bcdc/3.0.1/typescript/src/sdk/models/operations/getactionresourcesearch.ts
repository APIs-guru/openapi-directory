import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionResourceSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetActionResourceSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionResourceSearchQueryParams;
}


export class GetActionResourceSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
