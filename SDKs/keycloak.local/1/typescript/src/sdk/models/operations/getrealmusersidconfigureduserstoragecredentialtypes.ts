import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmUsersIdConfiguredUserStorageCredentialTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdConfiguredUserStorageCredentialTypesPathParams;
}


export class GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmUsersIdConfiguredUserStorageCredentialTypes2XxApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
