import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyVerifyPasswordQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyVerifyPasswordSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyVerifyPasswordQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest;
    security: IdentitytoolkitRelyingpartyVerifyPasswordSecurity;
}
export declare class IdentitytoolkitRelyingpartyVerifyPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyPasswordResponse?: shared.VerifyPasswordResponse;
}
