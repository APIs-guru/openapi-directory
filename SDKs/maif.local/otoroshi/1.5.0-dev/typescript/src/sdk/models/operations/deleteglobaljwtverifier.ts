import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class DeleteGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteGlobalJwtVerifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGlobalJwtVerifierPathParams;

  @SpeakeasyMetadata()
  security: DeleteGlobalJwtVerifierSecurity;
}


export class DeleteGlobalJwtVerifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleted?: shared.Deleted;

  @SpeakeasyMetadata()
  statusCode: number;
}
