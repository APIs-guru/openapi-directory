import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPeersIdStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPeersIdStoreRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostPeersIdStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPeersIdStorePathParams;

  @SpeakeasyMetadata()
  request?: PostPeersIdStoreRequests;
}


export class PostPeersIdStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPeersIdStore200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
