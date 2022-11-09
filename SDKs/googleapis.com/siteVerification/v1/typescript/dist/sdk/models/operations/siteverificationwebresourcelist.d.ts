import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourceListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class SiteVerificationWebResourceListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceListRequest extends SpeakeasyBase {
    queryParams: SiteVerificationWebResourceListQueryParams;
    security: SiteVerificationWebResourceListSecurity;
}
export declare class SiteVerificationWebResourceListResponse extends SpeakeasyBase {
    contentType: string;
    siteVerificationWebResourceListResponse?: shared.SiteVerificationWebResourceListResponse;
    statusCode: number;
}
