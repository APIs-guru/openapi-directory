import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=newPreviousCredentialId" })
  newPreviousCredentialId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPathParams;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
