import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllServicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AllServicesSecurity;
}


export class AllServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Service })
  services?: shared.Service[];

  @SpeakeasyMetadata()
  statusCode: number;
}
