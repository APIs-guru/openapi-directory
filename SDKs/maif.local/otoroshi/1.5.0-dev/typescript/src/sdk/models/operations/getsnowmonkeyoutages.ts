import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSnowMonkeyOutagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GetSnowMonkeyOutagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSnowMonkeyOutagesSecurity;
}


export class GetSnowMonkeyOutagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Outage })
  outages?: shared.Outage[];

  @SpeakeasyMetadata()
  statusCode: number;
}
