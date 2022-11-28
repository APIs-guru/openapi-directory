import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmUserStorageIdUnlinkUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdUnlinkUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUserStorageIdUnlinkUsersPathParams;
}


export class PostRealmUserStorageIdUnlinkUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
