import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAvailableLocationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAvailableLocationsListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAvailableLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAvailableLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAvailableLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAvailableLocationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAvailableLocationsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAvailableLocationsListSecurityOption1;
    option2?: FirebaseProjectsAvailableLocationsListSecurityOption2;
    option3?: FirebaseProjectsAvailableLocationsListSecurityOption3;
    option4?: FirebaseProjectsAvailableLocationsListSecurityOption4;
}
export declare class FirebaseProjectsAvailableLocationsListRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAvailableLocationsListPathParams;
    queryParams: FirebaseProjectsAvailableLocationsListQueryParams;
    security: FirebaseProjectsAvailableLocationsListSecurity;
}
export declare class FirebaseProjectsAvailableLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listAvailableLocationsResponse?: shared.ListAvailableLocationsResponse;
    statusCode: number;
}
