import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindAllGlobalJwtVerifiersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllGlobalJwtVerifiersRequest extends SpeakeasyBase {
  @Metadata()
  security: FindAllGlobalJwtVerifiersSecurity;
}


export class FindAllGlobalJwtVerifiersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GlobalJwtVerifier })
  globalJwtVerifiers?: shared.GlobalJwtVerifier[];

  @Metadata()
  statusCode: number;
}
