import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class AddKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.KeyInput;

  @SpeakeasyMetadata()
  security: AddKeySecurity;
}


export class AddKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
