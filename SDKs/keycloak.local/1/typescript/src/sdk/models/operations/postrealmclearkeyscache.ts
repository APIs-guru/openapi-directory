import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmClearKeysCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClearKeysCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClearKeysCachePathParams;
}


export class PostRealmClearKeysCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
