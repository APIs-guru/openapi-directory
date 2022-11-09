import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUserStorageIdRemoveImportedUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUserStorageIdRemoveImportedUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUserStorageIdRemoveImportedUsersPathParams;
}


export class PostRealmUserStorageIdRemoveImportedUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
