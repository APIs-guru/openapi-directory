import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueriesIdAnswersIndexQuerySeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQuerySeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostQueriesIdAnswersIndexQuerySeriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQuerySeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postQueriesIdAnswersIndexQuerySeries200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
