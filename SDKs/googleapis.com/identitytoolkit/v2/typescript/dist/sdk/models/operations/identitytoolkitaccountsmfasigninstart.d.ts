import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitAccountsMfaSignInStartQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitAccountsMfaSignInStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitAccountsMfaSignInStartRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitAccountsMfaSignInStartQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest;
    security: IdentitytoolkitAccountsMfaSignInStartSecurity;
}
export declare class IdentitytoolkitAccountsMfaSignInStartResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitV2StartMfaSignInResponse?: shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse;
    statusCode: number;
}
