import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetSnowMonkeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetSnowMonkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ResetSnowMonkeySecurity;
}


export class ResetSnowMonkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  done?: shared.Done;

  @SpeakeasyMetadata()
  statusCode: number;
}
