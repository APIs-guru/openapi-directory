import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllCertsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllCertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AllCertsSecurity;
}


export class AllCertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Certificate })
  certificates?: shared.Certificate[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
