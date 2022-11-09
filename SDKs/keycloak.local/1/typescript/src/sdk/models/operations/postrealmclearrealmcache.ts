import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmClearRealmCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClearRealmCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClearRealmCachePathParams;
}


export class PostRealmClearRealmCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
