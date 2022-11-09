import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnowMonkeyOutagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GetSnowMonkeyOutagesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSnowMonkeyOutagesSecurity;
}


export class GetSnowMonkeyOutagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Outage })
  outages?: shared.Outage[];

  @Metadata()
  statusCode: number;
}
