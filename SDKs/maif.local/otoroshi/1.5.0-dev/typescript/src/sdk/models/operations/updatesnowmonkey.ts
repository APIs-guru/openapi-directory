import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSnowMonkeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateSnowMonkeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @Metadata()
  security: UpdateSnowMonkeySecurity;
}


export class UpdateSnowMonkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snowMonkeyConfig?: shared.SnowMonkeyConfig;

  @Metadata()
  statusCode: number;
}
