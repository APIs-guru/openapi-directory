import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string;
    key?: string;
    mine?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeAnalyticsGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsListSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupsListSecurityOption1;
    option2?: YoutubeAnalyticsGroupsListSecurityOption2;
    option3?: YoutubeAnalyticsGroupsListSecurityOption3;
    option4?: YoutubeAnalyticsGroupsListSecurityOption4;
    option5?: YoutubeAnalyticsGroupsListSecurityOption5;
}
export declare class YoutubeAnalyticsGroupsListRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupsListQueryParams;
    security: YoutubeAnalyticsGroupsListSecurity;
}
export declare class YoutubeAnalyticsGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupsResponse?: shared.ListGroupsResponse;
    statusCode: number;
}
