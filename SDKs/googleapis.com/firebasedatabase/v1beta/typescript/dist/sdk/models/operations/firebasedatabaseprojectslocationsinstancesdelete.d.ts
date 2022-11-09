import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesDeletePathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams;
    security: FirebasedatabaseProjectsLocationsInstancesDeleteSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
