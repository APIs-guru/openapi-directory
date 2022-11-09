import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutGlobalConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PutGlobalConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GlobalConfig;

  @Metadata()
  security: PutGlobalConfigSecurity;
}


export class PutGlobalConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalConfig?: shared.GlobalConfig;

  @Metadata()
  statusCode: number;
}
