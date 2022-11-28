import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmUsersIdCredentialsCredentialIdUserLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdCredentialsCredentialIdUserLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersIdCredentialsCredentialIdUserLabelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PutRealmUsersIdCredentialsCredentialIdUserLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
