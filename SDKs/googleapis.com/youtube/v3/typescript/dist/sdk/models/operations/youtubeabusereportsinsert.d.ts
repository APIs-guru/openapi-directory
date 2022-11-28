import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAbuseReportsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeAbuseReportsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAbuseReportsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAbuseReportsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeAbuseReportsInsertSecurityOption1;
    option2?: YoutubeAbuseReportsInsertSecurityOption2;
}
export declare class YoutubeAbuseReportsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeAbuseReportsInsertQueryParams;
    request?: shared.AbuseReport;
    security: YoutubeAbuseReportsInsertSecurity;
}
export declare class YoutubeAbuseReportsInsertResponse extends SpeakeasyBase {
    abuseReport?: shared.AbuseReport;
    contentType: string;
    statusCode: number;
}
