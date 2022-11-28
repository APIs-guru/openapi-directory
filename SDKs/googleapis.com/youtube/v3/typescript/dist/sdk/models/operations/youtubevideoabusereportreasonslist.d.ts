import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideoAbuseReportReasonsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideoAbuseReportReasonsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoAbuseReportReasonsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoAbuseReportReasonsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoAbuseReportReasonsListSecurity extends SpeakeasyBase {
    option1?: YoutubeVideoAbuseReportReasonsListSecurityOption1;
    option2?: YoutubeVideoAbuseReportReasonsListSecurityOption2;
    option3?: YoutubeVideoAbuseReportReasonsListSecurityOption3;
}
export declare class YoutubeVideoAbuseReportReasonsListRequest extends SpeakeasyBase {
    queryParams: YoutubeVideoAbuseReportReasonsListQueryParams;
    security: YoutubeVideoAbuseReportReasonsListSecurity;
}
export declare class YoutubeVideoAbuseReportReasonsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoAbuseReportReasonListResponse?: shared.VideoAbuseReportReasonListResponse;
}
