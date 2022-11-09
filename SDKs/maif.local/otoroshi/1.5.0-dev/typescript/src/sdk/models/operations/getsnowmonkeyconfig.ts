import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnowMonkeyConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GetSnowMonkeyConfigRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSnowMonkeyConfigSecurity;
}


export class GetSnowMonkeyConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snowMonkeyConfig?: shared.SnowMonkeyConfig;

  @Metadata()
  statusCode: number;
}
