import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GlobalConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GlobalConfigSecurity;
}


export class GlobalConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalConfig?: shared.GlobalConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
