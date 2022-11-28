import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdQueryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueriesIdQueryQueryParams;
}


export class GetQueriesIdQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueriesIdQuery200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
