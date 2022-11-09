import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueriesIdAnswersIndexRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexRetrieveRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  any?: any;

  @Metadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostQueriesIdAnswersIndexRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostQueriesIdAnswersIndexRetrievePathParams;

  @Metadata()
  request?: PostQueriesIdAnswersIndexRetrieveRequests;
}


export class PostQueriesIdAnswersIndexRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postQueriesIdAnswersIndexRetrieve200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
