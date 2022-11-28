import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueriesIdAnswersIndexRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class PostQueriesIdAnswersIndexRetrieveRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostQueriesIdAnswersIndexRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostQueriesIdAnswersIndexRetrievePathParams;

  @SpeakeasyMetadata()
  request?: PostQueriesIdAnswersIndexRetrieveRequests;
}


export class PostQueriesIdAnswersIndexRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postQueriesIdAnswersIndexRetrieve200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
