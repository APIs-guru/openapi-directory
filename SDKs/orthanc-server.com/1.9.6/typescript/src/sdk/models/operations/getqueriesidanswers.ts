import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdAnswersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdAnswersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdAnswersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdAnswersPathParams;

  @Metadata()
  queryParams: GetQueriesIdAnswersQueryParams;
}


export class GetQueriesIdAnswersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueriesIdAnswers200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
