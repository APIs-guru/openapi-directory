import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmUsersIdConfiguredUserStorageCredentialTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdConfiguredUserStorageCredentialTypesPathParams;
}


export class GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmUsersIdConfiguredUserStorageCredentialTypes2XxApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
