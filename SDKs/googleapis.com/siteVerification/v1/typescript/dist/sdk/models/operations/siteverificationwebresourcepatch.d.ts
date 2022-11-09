import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourcePatchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SiteVerificationWebResourcePatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class SiteVerificationWebResourcePatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourcePatchRequest extends SpeakeasyBase {
    pathParams: SiteVerificationWebResourcePatchPathParams;
    queryParams: SiteVerificationWebResourcePatchQueryParams;
    request?: shared.SiteVerificationWebResourceResource;
    security: SiteVerificationWebResourcePatchSecurity;
}
export declare class SiteVerificationWebResourcePatchResponse extends SpeakeasyBase {
    contentType: string;
    siteVerificationWebResourceResource?: shared.SiteVerificationWebResourceResource;
    statusCode: number;
}
