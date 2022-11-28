import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmAuthenticationConfigDescriptionProviderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerId" })
  providerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationConfigDescriptionProviderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAuthenticationConfigDescriptionProviderIdPathParams;
}


export class GetRealmAuthenticationConfigDescriptionProviderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticatorConfigInfoRepresentation?: shared.AuthenticatorConfigInfoRepresentation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
