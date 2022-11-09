import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUserStorageIdUnlinkUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdUnlinkUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUserStorageIdUnlinkUsersPathParams;
}


export class PostRealmUserStorageIdUnlinkUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
