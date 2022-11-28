import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupItemsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeAnalyticsGroupItemsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsInsertSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupItemsInsertSecurityOption1;
    option2?: YoutubeAnalyticsGroupItemsInsertSecurityOption2;
    option3?: YoutubeAnalyticsGroupItemsInsertSecurityOption3;
    option4?: YoutubeAnalyticsGroupItemsInsertSecurityOption4;
    option5?: YoutubeAnalyticsGroupItemsInsertSecurityOption5;
}
export declare class YoutubeAnalyticsGroupItemsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupItemsInsertQueryParams;
    request?: shared.GroupItem;
    security: YoutubeAnalyticsGroupItemsInsertSecurity;
}
export declare class YoutubeAnalyticsGroupItemsInsertResponse extends SpeakeasyBase {
    contentType: string;
    groupItem?: shared.GroupItem;
    statusCode: number;
}
