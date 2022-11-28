import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmAuthenticationConfigIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticatorConfigRepresentation;
}


export class PutRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
