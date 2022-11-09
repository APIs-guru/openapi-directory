import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsDebugTokensDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsDebugTokensDeletePathParams;
    queryParams: FirebaseappcheckProjectsAppsDebugTokensDeleteQueryParams;
    security: FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
