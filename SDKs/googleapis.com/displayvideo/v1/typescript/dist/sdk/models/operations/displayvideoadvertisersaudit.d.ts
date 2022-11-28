import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersAuditPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersAuditQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersAuditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersAuditRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersAuditPathParams;
    queryParams: DisplayvideoAdvertisersAuditQueryParams;
    security: DisplayvideoAdvertisersAuditSecurity;
}
export declare class DisplayvideoAdvertisersAuditResponse extends SpeakeasyBase {
    auditAdvertiserResponse?: shared.AuditAdvertiserResponse;
    contentType: string;
    statusCode: number;
}
