import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifiedaccessChallengeCreateQueryParams extends SpeakeasyBase {
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
export declare class VerifiedaccessChallengeCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VerifiedaccessChallengeCreateRequest extends SpeakeasyBase {
    queryParams: VerifiedaccessChallengeCreateQueryParams;
    request?: Map<string, any>;
    security: VerifiedaccessChallengeCreateSecurity;
}
export declare class VerifiedaccessChallengeCreateResponse extends SpeakeasyBase {
    challenge?: shared.Challenge;
    contentType: string;
    statusCode: number;
}
