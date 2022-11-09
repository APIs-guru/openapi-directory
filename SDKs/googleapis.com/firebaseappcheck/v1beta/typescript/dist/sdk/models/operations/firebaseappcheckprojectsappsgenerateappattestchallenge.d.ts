import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams;
    queryParams: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams;
    request?: Map<string, any>;
    security: FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity;
}
export declare class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse?: shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse;
    statusCode: number;
}
