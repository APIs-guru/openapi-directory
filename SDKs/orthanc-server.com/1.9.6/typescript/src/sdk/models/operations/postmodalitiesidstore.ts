import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStoreRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostModalitiesIdStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdStorePathParams;

  @SpeakeasyMetadata()
  request?: PostModalitiesIdStoreRequests;
}


export class PostModalitiesIdStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postModalitiesIdStore200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
