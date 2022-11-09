import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllCertsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllCertsRequest extends SpeakeasyBase {
  @Metadata()
  security: AllCertsSecurity;
}


export class AllCertsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Certificate })
  certificates?: shared.Certificate[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
