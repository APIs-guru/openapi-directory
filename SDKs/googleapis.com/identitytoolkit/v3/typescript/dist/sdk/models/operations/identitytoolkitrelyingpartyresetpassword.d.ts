import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyResetPasswordQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyResetPasswordSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyResetPasswordQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyResetPasswordRequest;
    security: IdentitytoolkitRelyingpartyResetPasswordSecurity;
}
export declare class IdentitytoolkitRelyingpartyResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    resetPasswordResponse?: shared.ResetPasswordResponse;
    statusCode: number;
}
