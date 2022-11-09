import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OneCertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OneCertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class OneCertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OneCertPathParams;

  @Metadata()
  security: OneCertSecurity;
}


export class OneCertResponse extends SpeakeasyBase {
  @Metadata()
  certificate?: shared.Certificate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
