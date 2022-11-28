import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindGlobalJwtVerifiersByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class FindGlobalJwtVerifiersByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindGlobalJwtVerifiersByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindGlobalJwtVerifiersByIdPathParams;

  @SpeakeasyMetadata()
  security: FindGlobalJwtVerifiersByIdSecurity;
}


export class FindGlobalJwtVerifiersByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  statusCode: number;
}
