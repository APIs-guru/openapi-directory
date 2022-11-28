import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideosReportAbuseQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosReportAbuseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosReportAbuseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosReportAbuseSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosReportAbuseSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosReportAbuseSecurityOption1;
    option2?: YoutubeVideosReportAbuseSecurityOption2;
    option3?: YoutubeVideosReportAbuseSecurityOption3;
}
export declare class YoutubeVideosReportAbuseRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosReportAbuseQueryParams;
    request?: shared.VideoAbuseReport;
    security: YoutubeVideosReportAbuseSecurity;
}
export declare class YoutubeVideosReportAbuseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
