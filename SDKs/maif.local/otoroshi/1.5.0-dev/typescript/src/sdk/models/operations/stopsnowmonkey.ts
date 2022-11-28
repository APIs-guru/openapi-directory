import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopSnowMonkeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class StopSnowMonkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: StopSnowMonkeySecurity;
}


export class StopSnowMonkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  done?: shared.Done;

  @SpeakeasyMetadata()
  statusCode: number;
}
