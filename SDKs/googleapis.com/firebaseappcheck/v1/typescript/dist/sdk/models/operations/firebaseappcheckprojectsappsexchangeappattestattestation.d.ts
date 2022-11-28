import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
    security: FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse?: shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;
    statusCode: number;
}
