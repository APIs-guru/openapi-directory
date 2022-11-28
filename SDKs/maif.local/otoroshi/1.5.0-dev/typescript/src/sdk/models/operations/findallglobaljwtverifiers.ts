import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindAllGlobalJwtVerifiersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllGlobalJwtVerifiersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindAllGlobalJwtVerifiersSecurity;
}


export class FindAllGlobalJwtVerifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GlobalJwtVerifier })
  globalJwtVerifiers?: shared.GlobalJwtVerifier[];

  @SpeakeasyMetadata()
  statusCode: number;
}
