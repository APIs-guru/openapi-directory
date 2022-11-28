import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeAnalyticsGroupsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsInsertSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupsInsertSecurityOption1;
    option2?: YoutubeAnalyticsGroupsInsertSecurityOption2;
    option3?: YoutubeAnalyticsGroupsInsertSecurityOption3;
    option4?: YoutubeAnalyticsGroupsInsertSecurityOption4;
    option5?: YoutubeAnalyticsGroupsInsertSecurityOption5;
}
export declare class YoutubeAnalyticsGroupsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupsInsertQueryParams;
    request?: shared.Group;
    security: YoutubeAnalyticsGroupsInsertSecurity;
}
export declare class YoutubeAnalyticsGroupsInsertResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
