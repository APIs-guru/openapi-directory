import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=newPreviousCredentialId" })
  newPreviousCredentialId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdPathParams;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
