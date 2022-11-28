import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutCertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PutCertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCertPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Certificate;

  @SpeakeasyMetadata()
  security: PutCertSecurity;
}


export class PutCertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificate?: shared.Certificate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
