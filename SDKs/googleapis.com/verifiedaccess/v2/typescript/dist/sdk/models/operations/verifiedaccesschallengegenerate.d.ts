import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifiedaccessChallengeGenerateQueryParams extends SpeakeasyBase {
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
export declare class VerifiedaccessChallengeGenerateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VerifiedaccessChallengeGenerateRequest extends SpeakeasyBase {
    queryParams: VerifiedaccessChallengeGenerateQueryParams;
    request?: Map<string, any>;
    security: VerifiedaccessChallengeGenerateSecurity;
}
export declare class VerifiedaccessChallengeGenerateResponse extends SpeakeasyBase {
    challenge?: shared.Challenge;
    contentType: string;
    statusCode: number;
}
