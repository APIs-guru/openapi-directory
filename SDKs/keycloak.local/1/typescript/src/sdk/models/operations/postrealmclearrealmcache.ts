import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmClearRealmCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClearRealmCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClearRealmCachePathParams;
}


export class PostRealmClearRealmCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
