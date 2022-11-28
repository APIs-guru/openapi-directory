import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueriesIdAnswersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetQueriesIdAnswersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetQueriesIdAnswersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueriesIdAnswersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueriesIdAnswersQueryParams;
}


export class GetQueriesIdAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueriesIdAnswers200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
