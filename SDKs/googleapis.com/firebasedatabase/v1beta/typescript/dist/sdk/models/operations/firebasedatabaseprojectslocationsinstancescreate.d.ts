import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    databaseId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesCreatePathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesCreateQueryParams;
    request?: shared.DatabaseInstanceInput;
    security: FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
