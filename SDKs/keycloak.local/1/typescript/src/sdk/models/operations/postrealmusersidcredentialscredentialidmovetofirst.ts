import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersIdCredentialsCredentialIdMoveToFirstPathParams;
}


export class PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
