import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdRegistrationAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdRegistrationAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdRegistrationAccessTokenPathParams;
}


export class PostRealmClientsIdRegistrationAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  clientRepresentation?: shared.ClientRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
