import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQueriesIdRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostQueriesIdRetrieveRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostQueriesIdRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostQueriesIdRetrievePathParams;

  @SpeakeasyMetadata()
  request?: PostQueriesIdRetrieveRequests;
}


export class PostQueriesIdRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postQueriesIdRetrieve200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
