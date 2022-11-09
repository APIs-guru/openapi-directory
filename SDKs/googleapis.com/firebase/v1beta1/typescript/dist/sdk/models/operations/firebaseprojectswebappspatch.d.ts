import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseProjectsWebAppsPatchQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsPatchSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsPatchSecurityOption1;
    option2?: FirebaseProjectsWebAppsPatchSecurityOption2;
}
export declare class FirebaseProjectsWebAppsPatchRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsPatchPathParams;
    queryParams: FirebaseProjectsWebAppsPatchQueryParams;
    request?: shared.WebApp;
    security: FirebaseProjectsWebAppsPatchSecurity;
}
export declare class FirebaseProjectsWebAppsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
