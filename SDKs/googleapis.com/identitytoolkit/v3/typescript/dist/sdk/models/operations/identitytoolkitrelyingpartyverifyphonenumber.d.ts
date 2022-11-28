import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyVerifyPhoneNumberQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
    security: IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity;
}
export declare class IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    identitytoolkitRelyingpartyVerifyPhoneNumberResponse?: shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse;
    statusCode: number;
}
