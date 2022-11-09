import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateCertRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Certificate;

  @Metadata()
  security: CreateCertSecurity;
}


export class CreateCertResponse extends SpeakeasyBase {
  @Metadata()
  certificate?: shared.Certificate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
