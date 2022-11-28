import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyGetRecaptchaParamQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyGetRecaptchaParamRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyGetRecaptchaParamQueryParams;
    security: IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity;
}
export declare class IdentitytoolkitRelyingpartyGetRecaptchaParamResponse extends SpeakeasyBase {
    contentType: string;
    getRecaptchaParamResponse?: shared.GetRecaptchaParamResponse;
    statusCode: number;
}
