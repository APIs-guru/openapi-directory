import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdRegistrationAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdRegistrationAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdRegistrationAccessTokenPathParams;
}


export class PostRealmClientsIdRegistrationAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientRepresentation?: shared.ClientRepresentation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
