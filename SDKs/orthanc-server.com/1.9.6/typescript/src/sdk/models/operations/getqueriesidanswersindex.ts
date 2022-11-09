import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueriesIdAnswersIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class GetQueriesIdAnswersIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueriesIdAnswersIndexPathParams;
}


export class GetQueriesIdAnswersIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueriesIdAnswersIndex200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
