import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmClearUserCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClearUserCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClearUserCachePathParams;
}


export class PostRealmClearUserCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
