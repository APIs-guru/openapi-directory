import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsServicesListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsServicesListSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsServicesListSecurityOption1;
    option2?: FirebaseappcheckProjectsServicesListSecurityOption2;
}
export declare class FirebaseappcheckProjectsServicesListRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsServicesListPathParams;
    queryParams: FirebaseappcheckProjectsServicesListQueryParams;
    security: FirebaseappcheckProjectsServicesListSecurity;
}
export declare class FirebaseappcheckProjectsServicesListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaListServicesResponse?: shared.GoogleFirebaseAppcheckV1betaListServicesResponse;
    statusCode: number;
}
