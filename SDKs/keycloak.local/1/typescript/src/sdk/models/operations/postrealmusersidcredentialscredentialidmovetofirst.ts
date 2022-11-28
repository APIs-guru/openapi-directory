import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUsersIdCredentialsCredentialIdMoveToFirstPathParams;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
