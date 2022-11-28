import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAndroidAppsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAndroidAppsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAndroidAppsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsCreateSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAndroidAppsCreateSecurityOption1;
    option2?: FirebaseProjectsAndroidAppsCreateSecurityOption2;
}
export declare class FirebaseProjectsAndroidAppsCreateRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAndroidAppsCreatePathParams;
    queryParams: FirebaseProjectsAndroidAppsCreateQueryParams;
    request?: shared.AndroidAppInput;
    security: FirebaseProjectsAndroidAppsCreateSecurity;
}
export declare class FirebaseProjectsAndroidAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
