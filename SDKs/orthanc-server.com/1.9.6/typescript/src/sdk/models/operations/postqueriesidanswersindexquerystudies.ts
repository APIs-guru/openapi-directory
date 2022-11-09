import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueriesIdAnswersIndexQueryStudiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQueryStudiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostQueriesIdAnswersIndexQueryStudiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQueryStudiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postQueriesIdAnswersIndexQueryStudies200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
