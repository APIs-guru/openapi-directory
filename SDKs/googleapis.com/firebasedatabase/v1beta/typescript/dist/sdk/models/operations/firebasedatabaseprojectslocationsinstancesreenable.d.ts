import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesReenablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesReenableQueryParams extends SpeakeasyBase {
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
export declare class FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesReenableSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2;
}
export declare class FirebasedatabaseProjectsLocationsInstancesReenableRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesReenablePathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesReenableQueryParams;
    request?: Map<string, any>;
    security: FirebasedatabaseProjectsLocationsInstancesReenableSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesReenableResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
