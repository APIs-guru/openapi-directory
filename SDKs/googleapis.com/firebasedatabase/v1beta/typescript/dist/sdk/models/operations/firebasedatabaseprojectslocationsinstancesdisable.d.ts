import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDisableQueryParams extends SpeakeasyBase {
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
export declare class FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDisableSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDisableRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesDisablePathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesDisableQueryParams;
    request?: Map<string, any>;
    security: FirebasedatabaseProjectsLocationsInstancesDisableSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesDisableResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
