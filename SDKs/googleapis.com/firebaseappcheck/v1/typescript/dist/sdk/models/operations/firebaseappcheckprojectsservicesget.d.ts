import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsServicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseappcheckProjectsServicesGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsServicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsServicesGetSecurityOption1;
    option2?: FirebaseappcheckProjectsServicesGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsServicesGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsServicesGetPathParams;
    queryParams: FirebaseappcheckProjectsServicesGetQueryParams;
    security: FirebaseappcheckProjectsServicesGetSecurity;
}
export declare class FirebaseappcheckProjectsServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1Service?: shared.GoogleFirebaseAppcheckV1Service;
    statusCode: number;
}
