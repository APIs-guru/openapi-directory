import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdQueryPathParams;

  @Metadata()
  queryParams: GetQueriesIdQueryQueryParams;
}


export class GetQueriesIdQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueriesIdQuery200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
