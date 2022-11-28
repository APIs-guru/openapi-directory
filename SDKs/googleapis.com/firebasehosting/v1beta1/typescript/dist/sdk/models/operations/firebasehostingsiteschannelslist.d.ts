import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesChannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesChannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesChannelsListSecurityOption1;
    option2?: FirebasehostingSitesChannelsListSecurityOption2;
    option3?: FirebasehostingSitesChannelsListSecurityOption3;
    option4?: FirebasehostingSitesChannelsListSecurityOption4;
}
export declare class FirebasehostingSitesChannelsListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesChannelsListPathParams;
    queryParams: FirebasehostingSitesChannelsListQueryParams;
    security: FirebasehostingSitesChannelsListSecurity;
}
export declare class FirebasehostingSitesChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
}
