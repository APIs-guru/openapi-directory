import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
    security: IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity;
}
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyCustomTokenResponse?: shared.VerifyCustomTokenResponse;
}
