import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdAnswersIndexContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class GetQueriesIdAnswersIndexContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdAnswersIndexContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdAnswersIndexContentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueriesIdAnswersIndexContentQueryParams;
}


export class GetQueriesIdAnswersIndexContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueriesIdAnswersIndexContent200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
