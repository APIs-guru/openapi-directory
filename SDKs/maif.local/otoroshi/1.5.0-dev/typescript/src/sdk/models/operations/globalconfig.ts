import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GlobalConfigRequest extends SpeakeasyBase {
  @Metadata()
  security: GlobalConfigSecurity;
}


export class GlobalConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalConfig?: shared.GlobalConfig;

  @Metadata()
  statusCode: number;
}
