import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupItemsDeleteQueryParams extends SpeakeasyBase {
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
export declare class YoutubeAnalyticsGroupItemsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupItemsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
    option2?: YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
    option3?: YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
    option4?: YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
    option5?: YoutubeAnalyticsGroupItemsDeleteSecurityOption5;
}
export declare class YoutubeAnalyticsGroupItemsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupItemsDeleteQueryParams;
    security: YoutubeAnalyticsGroupItemsDeleteSecurity;
}
export declare class YoutubeAnalyticsGroupItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
