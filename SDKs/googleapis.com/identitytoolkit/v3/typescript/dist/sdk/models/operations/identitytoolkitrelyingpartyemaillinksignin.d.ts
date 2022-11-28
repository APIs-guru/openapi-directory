import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyEmailLinkSigninSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyEmailLinkSigninRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
    security: IdentitytoolkitRelyingpartyEmailLinkSigninSecurity;
}
export declare class IdentitytoolkitRelyingpartyEmailLinkSigninResponse extends SpeakeasyBase {
    contentType: string;
    emailLinkSigninResponse?: shared.EmailLinkSigninResponse;
    statusCode: number;
}
