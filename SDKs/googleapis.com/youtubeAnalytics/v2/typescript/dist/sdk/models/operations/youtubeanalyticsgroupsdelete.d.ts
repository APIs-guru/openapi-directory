import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupsDeleteSecurityOption1;
    option2?: YoutubeAnalyticsGroupsDeleteSecurityOption2;
    option3?: YoutubeAnalyticsGroupsDeleteSecurityOption3;
    option4?: YoutubeAnalyticsGroupsDeleteSecurityOption4;
    option5?: YoutubeAnalyticsGroupsDeleteSecurityOption5;
}
export declare class YoutubeAnalyticsGroupsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupsDeleteQueryParams;
    security: YoutubeAnalyticsGroupsDeleteSecurity;
}
export declare class YoutubeAnalyticsGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
