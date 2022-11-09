import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmAuthenticationConfigIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticatorConfigRepresentation;
}


export class PutRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
