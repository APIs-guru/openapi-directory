import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationConfigDescriptionProviderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=providerId" })
  providerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationConfigDescriptionProviderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationConfigDescriptionProviderIdPathParams;
}


export class GetRealmAuthenticationConfigDescriptionProviderIdResponse extends SpeakeasyBase {
  @Metadata()
  authenticatorConfigInfoRepresentation?: shared.AuthenticatorConfigInfoRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
