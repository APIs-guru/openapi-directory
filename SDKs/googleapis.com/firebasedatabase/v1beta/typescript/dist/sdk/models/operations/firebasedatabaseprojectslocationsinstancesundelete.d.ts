import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2;
}
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesUndeletePathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams;
    request?: Map<string, any>;
    security: FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
