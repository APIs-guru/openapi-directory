import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKeyByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetKeyByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class GetKeyByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetKeyByIdPathParams;

  @SpeakeasyMetadata()
  security: GetKeyByIdSecurity;
}


export class GetKeyByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  key?: shared.Key;

  @SpeakeasyMetadata()
  statusCode: number;
}
