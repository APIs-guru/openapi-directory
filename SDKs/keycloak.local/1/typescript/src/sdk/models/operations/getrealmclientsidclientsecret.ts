import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdClientSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdClientSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdClientSecretPathParams;
}


export class GetRealmClientsIdClientSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  credentialRepresentation?: shared.CredentialRepresentation;

  @Metadata()
  statusCode: number;
}
