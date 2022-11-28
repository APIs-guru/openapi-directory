import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartySendVerificationCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartySendVerificationCodeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartySendVerificationCodeRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartySendVerificationCodeQueryParams;
    request?: shared.IdentitytoolkitRelyingpartySendVerificationCodeRequest;
    security: IdentitytoolkitRelyingpartySendVerificationCodeSecurity;
}
export declare class IdentitytoolkitRelyingpartySendVerificationCodeResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartySendVerificationCodeResponse?: shared.IdentitytoolkitRelyingpartySendVerificationCodeResponse;
    statusCode: number;
}
