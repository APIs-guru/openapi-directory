import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OneCertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OneCertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class OneCertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OneCertPathParams;

  @SpeakeasyMetadata()
  security: OneCertSecurity;
}


export class OneCertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificate?: shared.Certificate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
