import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmUserStorageIdRemoveImportedUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdRemoveImportedUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUserStorageIdRemoveImportedUsersPathParams;
}


export class PostRealmUserStorageIdRemoveImportedUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
