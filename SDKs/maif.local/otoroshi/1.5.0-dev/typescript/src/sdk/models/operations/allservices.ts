import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllServicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllServicesRequest extends SpeakeasyBase {
  @Metadata()
  security: AllServicesSecurity;
}


export class AllServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Service })
  services?: shared.Service[];

  @Metadata()
  statusCode: number;
}
