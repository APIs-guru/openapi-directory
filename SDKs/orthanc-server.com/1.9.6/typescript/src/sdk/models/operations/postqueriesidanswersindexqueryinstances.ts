import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueriesIdAnswersIndexQueryInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexQueryInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostQueriesIdAnswersIndexQueryInstancesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostQueriesIdAnswersIndexQueryInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postQueriesIdAnswersIndexQueryInstances200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
