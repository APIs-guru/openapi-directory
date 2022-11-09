import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsIosAppsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsIosAppsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsIosAppsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsCreateSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsIosAppsCreateSecurityOption1;
    option2?: FirebaseProjectsIosAppsCreateSecurityOption2;
}
export declare class FirebaseProjectsIosAppsCreateRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsIosAppsCreatePathParams;
    queryParams: FirebaseProjectsIosAppsCreateQueryParams;
    request?: shared.IosApp;
    security: FirebaseProjectsIosAppsCreateSecurity;
}
export declare class FirebaseProjectsIosAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
