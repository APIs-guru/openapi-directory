import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2;
    option3?: FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3;
    option4?: FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesGetPathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesGetQueryParams;
    security: FirebasedatabaseProjectsLocationsInstancesGetSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesGetResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
