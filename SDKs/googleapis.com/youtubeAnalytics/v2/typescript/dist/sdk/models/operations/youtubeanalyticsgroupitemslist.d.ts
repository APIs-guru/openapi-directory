import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupItemsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupId?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeAnalyticsGroupItemsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsListSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupItemsListSecurityOption1;
    option2?: YoutubeAnalyticsGroupItemsListSecurityOption2;
    option3?: YoutubeAnalyticsGroupItemsListSecurityOption3;
    option4?: YoutubeAnalyticsGroupItemsListSecurityOption4;
    option5?: YoutubeAnalyticsGroupItemsListSecurityOption5;
}
export declare class YoutubeAnalyticsGroupItemsListRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupItemsListQueryParams;
    security: YoutubeAnalyticsGroupItemsListSecurity;
}
export declare class YoutubeAnalyticsGroupItemsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupItemsResponse?: shared.ListGroupItemsResponse;
    statusCode: number;
}
