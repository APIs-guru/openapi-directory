import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsSearchAppsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsSearchAppsQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaseProjectsSearchAppsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsSearchAppsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsSearchAppsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsSearchAppsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsSearchAppsSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsSearchAppsSecurityOption1;
    option2?: FirebaseProjectsSearchAppsSecurityOption2;
    option3?: FirebaseProjectsSearchAppsSecurityOption3;
    option4?: FirebaseProjectsSearchAppsSecurityOption4;
}
export declare class FirebaseProjectsSearchAppsRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsSearchAppsPathParams;
    queryParams: FirebaseProjectsSearchAppsQueryParams;
    security: FirebaseProjectsSearchAppsSecurity;
}
export declare class FirebaseProjectsSearchAppsResponse extends SpeakeasyBase {
    contentType: string;
    searchFirebaseAppsResponse?: shared.SearchFirebaseAppsResponse;
    statusCode: number;
}
