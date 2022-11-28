import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsWebAppsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsCreateSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsCreateSecurityOption1;
    option2?: FirebaseProjectsWebAppsCreateSecurityOption2;
}
export declare class FirebaseProjectsWebAppsCreateRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsCreatePathParams;
    queryParams: FirebaseProjectsWebAppsCreateQueryParams;
    request?: shared.WebAppInput;
    security: FirebaseProjectsWebAppsCreateSecurity;
}
export declare class FirebaseProjectsWebAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
