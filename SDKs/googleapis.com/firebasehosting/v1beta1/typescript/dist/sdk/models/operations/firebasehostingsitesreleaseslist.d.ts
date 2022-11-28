import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesReleasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesReleasesListQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesReleasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesReleasesListSecurityOption1;
    option2?: FirebasehostingSitesReleasesListSecurityOption2;
    option3?: FirebasehostingSitesReleasesListSecurityOption3;
    option4?: FirebasehostingSitesReleasesListSecurityOption4;
}
export declare class FirebasehostingSitesReleasesListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesReleasesListPathParams;
    queryParams: FirebasehostingSitesReleasesListQueryParams;
    security: FirebasehostingSitesReleasesListSecurity;
}
export declare class FirebasehostingSitesReleasesListResponse extends SpeakeasyBase {
    contentType: string;
    listReleasesResponse?: shared.ListReleasesResponse;
    statusCode: number;
}
