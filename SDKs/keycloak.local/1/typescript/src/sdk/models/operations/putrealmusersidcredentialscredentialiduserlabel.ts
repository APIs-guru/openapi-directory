import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmUsersIdCredentialsCredentialIdUserLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdCredentialsCredentialIdUserLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdCredentialsCredentialIdUserLabelPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PutRealmUsersIdCredentialsCredentialIdUserLabelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
