import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class UpdateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.KeyInput;

  @SpeakeasyMetadata()
  security: UpdateKeySecurity;
}


export class UpdateKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
