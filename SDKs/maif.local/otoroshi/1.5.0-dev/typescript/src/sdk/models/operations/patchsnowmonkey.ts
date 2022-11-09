import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchSnowMonkeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchSnowMonkeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @Metadata()
  security: PatchSnowMonkeySecurity;
}


export class PatchSnowMonkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snowMonkeyConfig?: shared.SnowMonkeyConfig;

  @Metadata()
  statusCode: number;
}
