import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutCertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PutCertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCertPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Certificate;

  @Metadata()
  security: PutCertSecurity;
}


export class PutCertResponse extends SpeakeasyBase {
  @Metadata()
  certificate?: shared.Certificate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
