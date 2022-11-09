import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUsersIdLogoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdLogoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersIdLogoutPathParams;
}


export class PostRealmUsersIdLogoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
