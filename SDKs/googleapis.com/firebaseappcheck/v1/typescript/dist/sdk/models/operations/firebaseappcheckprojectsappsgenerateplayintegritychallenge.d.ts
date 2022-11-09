import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams;
    queryParams: FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams;
    request?: Map<string, any>;
    security: FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity;
}
export declare class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse?: shared.GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse;
    statusCode: number;
}
