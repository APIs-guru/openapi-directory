import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdStorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStoreRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  any?: any;

  @Metadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PostModalitiesIdStoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdStorePathParams;

  @Metadata()
  request?: PostModalitiesIdStoreRequests;
}


export class PostModalitiesIdStoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdStore200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
