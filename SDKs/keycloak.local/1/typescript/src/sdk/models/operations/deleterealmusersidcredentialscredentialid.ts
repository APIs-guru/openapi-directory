import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmUsersIdCredentialsCredentialIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdCredentialsCredentialIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmUsersIdCredentialsCredentialIdPathParams;
}


export class DeleteRealmUsersIdCredentialsCredentialIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
