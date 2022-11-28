import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSnowMonkeyConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GetSnowMonkeyConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSnowMonkeyConfigSecurity;
}


export class GetSnowMonkeyConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snowMonkeyConfig?: shared.SnowMonkeyConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
