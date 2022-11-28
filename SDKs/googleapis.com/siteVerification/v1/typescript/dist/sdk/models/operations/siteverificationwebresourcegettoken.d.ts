import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourceGetTokenQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class SiteVerificationWebResourceGetTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceGetTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceGetTokenSecurity extends SpeakeasyBase {
    option1?: SiteVerificationWebResourceGetTokenSecurityOption1;
    option2?: SiteVerificationWebResourceGetTokenSecurityOption2;
}
export declare class SiteVerificationWebResourceGetTokenRequest extends SpeakeasyBase {
    queryParams: SiteVerificationWebResourceGetTokenQueryParams;
    request?: shared.SiteVerificationWebResourceGettokenRequest;
    security: SiteVerificationWebResourceGetTokenSecurity;
}
export declare class SiteVerificationWebResourceGetTokenResponse extends SpeakeasyBase {
    contentType: string;
    siteVerificationWebResourceGettokenResponse?: shared.SiteVerificationWebResourceGettokenResponse;
    statusCode: number;
}
