import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmUsersIdCredentialsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdCredentialsPathParams;
}


export class GetRealmUsersIdCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CredentialRepresentation })
  credentialRepresentations?: shared.CredentialRepresentation[];

  @Metadata()
  statusCode: number;
}
