import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartSnowMonkeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class StartSnowMonkeyRequest extends SpeakeasyBase {
  @Metadata()
  security: StartSnowMonkeySecurity;
}


export class StartSnowMonkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  done?: shared.Done;

  @Metadata()
  statusCode: number;
}
