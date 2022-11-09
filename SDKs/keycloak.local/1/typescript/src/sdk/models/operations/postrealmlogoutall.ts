import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmLogoutAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmLogoutAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmLogoutAllPathParams;
}


export class PostRealmLogoutAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
