import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseProjectsWebAppsUndeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsUndeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsUndeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsUndeleteSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsUndeleteSecurityOption1;
    option2?: FirebaseProjectsWebAppsUndeleteSecurityOption2;
}
export declare class FirebaseProjectsWebAppsUndeleteRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsUndeletePathParams;
    queryParams: FirebaseProjectsWebAppsUndeleteQueryParams;
    request?: shared.UndeleteWebAppRequest;
    security: FirebaseProjectsWebAppsUndeleteSecurity;
}
export declare class FirebaseProjectsWebAppsUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
