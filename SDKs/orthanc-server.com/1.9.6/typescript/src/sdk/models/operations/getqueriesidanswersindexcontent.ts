import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdAnswersIndexContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class GetQueriesIdAnswersIndexContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdAnswersIndexContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdAnswersIndexContentPathParams;

  @Metadata()
  queryParams: GetQueriesIdAnswersIndexContentQueryParams;
}


export class GetQueriesIdAnswersIndexContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueriesIdAnswersIndexContent200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
