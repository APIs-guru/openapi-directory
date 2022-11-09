import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsRemovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseProjectsWebAppsRemoveQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsRemoveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsRemoveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsRemoveSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsRemoveSecurityOption1;
    option2?: FirebaseProjectsWebAppsRemoveSecurityOption2;
}
export declare class FirebaseProjectsWebAppsRemoveRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsRemovePathParams;
    queryParams: FirebaseProjectsWebAppsRemoveQueryParams;
    request?: shared.RemoveWebAppRequest;
    security: FirebaseProjectsWebAppsRemoveSecurity;
}
export declare class FirebaseProjectsWebAppsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
