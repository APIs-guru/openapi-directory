import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsListSecurityOption1;
    option2?: FirebasehostingSitesVersionsListSecurityOption2;
    option3?: FirebasehostingSitesVersionsListSecurityOption3;
    option4?: FirebasehostingSitesVersionsListSecurityOption4;
}
export declare class FirebasehostingSitesVersionsListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsListPathParams;
    queryParams: FirebasehostingSitesVersionsListQueryParams;
    security: FirebasehostingSitesVersionsListSecurity;
}
export declare class FirebasehostingSitesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
}
