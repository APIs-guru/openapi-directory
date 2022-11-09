import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteVerificationWebResourceDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SiteVerificationWebResourceDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class SiteVerificationWebResourceDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SiteVerificationWebResourceDeleteRequest extends SpeakeasyBase {
    pathParams: SiteVerificationWebResourceDeletePathParams;
    queryParams: SiteVerificationWebResourceDeleteQueryParams;
    security: SiteVerificationWebResourceDeleteSecurity;
}
export declare class SiteVerificationWebResourceDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
