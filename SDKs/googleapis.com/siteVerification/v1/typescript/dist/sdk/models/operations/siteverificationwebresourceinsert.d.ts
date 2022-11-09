import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourceInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    verificationMethod: string;
}
export declare class SiteVerificationWebResourceInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceInsertSecurity extends SpeakeasyBase {
    option1?: SiteVerificationWebResourceInsertSecurityOption1;
    option2?: SiteVerificationWebResourceInsertSecurityOption2;
}
export declare class SiteVerificationWebResourceInsertRequest extends SpeakeasyBase {
    queryParams: SiteVerificationWebResourceInsertQueryParams;
    request?: shared.SiteVerificationWebResourceResource;
    security: SiteVerificationWebResourceInsertSecurity;
}
export declare class SiteVerificationWebResourceInsertResponse extends SpeakeasyBase {
    contentType: string;
    siteVerificationWebResourceResource?: shared.SiteVerificationWebResourceResource;
    statusCode: number;
}
