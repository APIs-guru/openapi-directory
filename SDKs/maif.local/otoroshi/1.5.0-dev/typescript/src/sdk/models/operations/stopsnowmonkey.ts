import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopSnowMonkeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class StopSnowMonkeyRequest extends SpeakeasyBase {
  @Metadata()
  security: StopSnowMonkeySecurity;
}


export class StopSnowMonkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  done?: shared.Done;

  @Metadata()
  statusCode: number;
}
