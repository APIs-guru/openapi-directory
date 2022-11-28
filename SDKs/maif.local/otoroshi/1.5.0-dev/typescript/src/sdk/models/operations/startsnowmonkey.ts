import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartSnowMonkeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class StartSnowMonkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: StartSnowMonkeySecurity;
}


export class StartSnowMonkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  done?: shared.Done;

  @SpeakeasyMetadata()
  statusCode: number;
}
