import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueriesIdAnswersIndexQueryStudiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQueryStudiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostQueriesIdAnswersIndexQueryStudiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQueryStudiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postQueriesIdAnswersIndexQueryStudies200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
