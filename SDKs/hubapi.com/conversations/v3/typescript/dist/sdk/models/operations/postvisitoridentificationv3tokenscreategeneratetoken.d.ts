import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity extends SpeakeasyBase {
    option1?: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1;
    option2?: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2;
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
