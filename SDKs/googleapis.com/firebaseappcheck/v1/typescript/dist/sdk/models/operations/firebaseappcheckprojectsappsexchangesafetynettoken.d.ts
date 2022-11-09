import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;
    statusCode: number;
}
