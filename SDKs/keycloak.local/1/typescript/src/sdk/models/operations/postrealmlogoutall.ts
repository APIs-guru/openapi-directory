import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmLogoutAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmLogoutAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmLogoutAllPathParams;
}


export class PostRealmLogoutAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
