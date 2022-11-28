import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsReportsQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currency?: string;
    dimensions?: string;
    endDate?: string;
    fields?: string;
    filters?: string;
    ids?: string;
    includeHistoricalChannelData?: boolean;
    key?: string;
    maxResults?: number;
    metrics?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sort?: string;
    startDate?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeAnalyticsReportsQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsReportsQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsReportsQuerySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsReportsQuerySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsReportsQuerySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsReportsQuerySecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsReportsQuerySecurityOption1;
    option2?: YoutubeAnalyticsReportsQuerySecurityOption2;
    option3?: YoutubeAnalyticsReportsQuerySecurityOption3;
    option4?: YoutubeAnalyticsReportsQuerySecurityOption4;
    option5?: YoutubeAnalyticsReportsQuerySecurityOption5;
}
export declare class YoutubeAnalyticsReportsQueryRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsReportsQueryQueryParams;
    security: YoutubeAnalyticsReportsQuerySecurity;
}
export declare class YoutubeAnalyticsReportsQueryResponse extends SpeakeasyBase {
    contentType: string;
    queryResponse?: shared.QueryResponse;
    statusCode: number;
}
