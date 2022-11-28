import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSnowMonkeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateSnowMonkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @SpeakeasyMetadata()
  security: UpdateSnowMonkeySecurity;
}


export class UpdateSnowMonkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snowMonkeyConfig?: shared.SnowMonkeyConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
