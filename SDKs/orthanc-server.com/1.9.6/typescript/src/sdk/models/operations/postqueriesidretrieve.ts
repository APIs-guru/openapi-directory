import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostQueriesIdRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostQueriesIdRetrieveRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  any?: any;

  @Metadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostQueriesIdRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostQueriesIdRetrievePathParams;

  @Metadata()
  request?: PostQueriesIdRetrieveRequests;
}


export class PostQueriesIdRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postQueriesIdRetrieve200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
