import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitAccountsMfaSignInFinalizeQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitAccountsMfaSignInFinalizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitAccountsMfaSignInFinalizeRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitAccountsMfaSignInFinalizeQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest;
    security: IdentitytoolkitAccountsMfaSignInFinalizeSecurity;
}
export declare class IdentitytoolkitAccountsMfaSignInFinalizeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse?: shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse;
    statusCode: number;
}
