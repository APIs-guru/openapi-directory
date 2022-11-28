import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartySignupNewUserQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartySignupNewUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartySignupNewUserRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartySignupNewUserQueryParams;
    request?: shared.IdentitytoolkitRelyingpartySignupNewUserRequest;
    security: IdentitytoolkitRelyingpartySignupNewUserSecurity;
}
export declare class IdentitytoolkitRelyingpartySignupNewUserResponse extends SpeakeasyBase {
    contentType: string;
    signupNewUserResponse?: shared.SignupNewUserResponse;
    statusCode: number;
}
