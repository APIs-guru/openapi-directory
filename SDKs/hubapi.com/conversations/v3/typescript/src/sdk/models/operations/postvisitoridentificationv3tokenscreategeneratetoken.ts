import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IdentificationTokenGenerationRequest;

  @SpeakeasyMetadata()
  security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
}


export class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  identificationTokenResponse?: shared.IdentificationTokenResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
