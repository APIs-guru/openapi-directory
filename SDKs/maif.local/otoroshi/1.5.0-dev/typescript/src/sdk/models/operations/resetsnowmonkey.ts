import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetSnowMonkeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetSnowMonkeyRequest extends SpeakeasyBase {
  @Metadata()
  security: ResetSnowMonkeySecurity;
}


export class ResetSnowMonkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  done?: shared.Done;

  @Metadata()
  statusCode: number;
}
