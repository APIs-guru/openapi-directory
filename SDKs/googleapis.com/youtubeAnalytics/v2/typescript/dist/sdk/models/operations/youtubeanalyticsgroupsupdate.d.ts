import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class YoutubeAnalyticsGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class YoutubeAnalyticsGroupsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeAnalyticsGroupsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeAnalyticsGroupsUpdateSecurityOption1;
    option2?: YoutubeAnalyticsGroupsUpdateSecurityOption2;
    option3?: YoutubeAnalyticsGroupsUpdateSecurityOption3;
    option4?: YoutubeAnalyticsGroupsUpdateSecurityOption4;
    option5?: YoutubeAnalyticsGroupsUpdateSecurityOption5;
}
export declare class YoutubeAnalyticsGroupsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeAnalyticsGroupsUpdateQueryParams;
    request?: shared.Group;
    security: YoutubeAnalyticsGroupsUpdateSecurity;
}
export declare class YoutubeAnalyticsGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
