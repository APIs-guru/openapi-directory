import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindGlobalJwtVerifiersByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class FindGlobalJwtVerifiersByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindGlobalJwtVerifiersByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindGlobalJwtVerifiersByIdPathParams;

  @Metadata()
  security: FindGlobalJwtVerifiersByIdSecurity;
}


export class FindGlobalJwtVerifiersByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @Metadata()
  statusCode: number;
}
