import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmClearUserCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClearUserCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClearUserCachePathParams;
}


export class PostRealmClearUserCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
