import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourceGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SiteVerificationWebResourceGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class SiteVerificationWebResourceGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceGetRequest extends SpeakeasyBase {
    pathParams: SiteVerificationWebResourceGetPathParams;
    queryParams: SiteVerificationWebResourceGetQueryParams;
    security: SiteVerificationWebResourceGetSecurity;
}
export declare class SiteVerificationWebResourceGetResponse extends SpeakeasyBase {
    contentType: string;
    siteVerificationWebResourceResource?: shared.SiteVerificationWebResourceResource;
    statusCode: number;
}
