import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsServicesBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsServicesBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesBatchUpdateSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1;
    option2?: FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2;
}
export declare class FirebaseappcheckProjectsServicesBatchUpdateRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsServicesBatchUpdatePathParams;
    queryParams: FirebaseappcheckProjectsServicesBatchUpdateQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest;
    security: FirebaseappcheckProjectsServicesBatchUpdateSecurity;
}
export declare class FirebaseappcheckProjectsServicesBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1BatchUpdateServicesResponse?: shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse;
    statusCode: number;
}
