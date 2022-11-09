import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueriesIdAnswersIndexQuerySeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQuerySeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostQueriesIdAnswersIndexQuerySeriesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQuerySeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postQueriesIdAnswersIndexQuerySeries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
