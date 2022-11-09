import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class DeleteGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteGlobalJwtVerifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGlobalJwtVerifierPathParams;

  @Metadata()
  security: DeleteGlobalJwtVerifierSecurity;
}


export class DeleteGlobalJwtVerifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
