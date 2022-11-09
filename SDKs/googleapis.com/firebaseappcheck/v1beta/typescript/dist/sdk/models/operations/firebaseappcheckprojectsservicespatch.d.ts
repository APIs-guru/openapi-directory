import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsServicesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseappcheckProjectsServicesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaseappcheckProjectsServicesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesPatchSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsServicesPatchSecurityOption1;
    option2?: FirebaseappcheckProjectsServicesPatchSecurityOption2;
}
export declare class FirebaseappcheckProjectsServicesPatchRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsServicesPatchPathParams;
    queryParams: FirebaseappcheckProjectsServicesPatchQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaService;
    security: FirebaseappcheckProjectsServicesPatchSecurity;
}
export declare class FirebaseappcheckProjectsServicesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaService?: shared.GoogleFirebaseAppcheckV1betaService;
    statusCode: number;
}
