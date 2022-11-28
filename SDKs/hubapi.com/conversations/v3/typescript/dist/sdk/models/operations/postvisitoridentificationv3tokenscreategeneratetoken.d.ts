import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest extends SpeakeasyBase {
    request: shared.IdentificationTokenGenerationRequest;
    security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
}
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    identificationTokenResponse?: shared.IdentificationTokenResponse;
    statusCode: number;
}
