import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationConfigIdPathParams;
}


export class GetRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
  @Metadata()
  authenticatorConfigRepresentation?: shared.AuthenticatorConfigRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
