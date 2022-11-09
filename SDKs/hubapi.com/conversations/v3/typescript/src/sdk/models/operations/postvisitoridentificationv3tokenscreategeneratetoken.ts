import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentificationTokenGenerationRequest;

  @Metadata()
  security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  identificationTokenResponse?: shared.IdentificationTokenResponse;

  @Metadata()
  statusCode: number;
}
