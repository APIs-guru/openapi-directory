import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsDebugTokensListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensListSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensListRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsDebugTokensListPathParams;
    queryParams: FirebaseappcheckProjectsAppsDebugTokensListQueryParams;
    security: FirebaseappcheckProjectsAppsDebugTokensListSecurity;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaListDebugTokensResponse?: shared.GoogleFirebaseAppcheckV1betaListDebugTokensResponse;
    statusCode: number;
}
