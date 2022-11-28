import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitAccountsMfaEnrollmentStartQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitAccountsMfaEnrollmentStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentStartRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitAccountsMfaEnrollmentStartQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest;
    security: IdentitytoolkitAccountsMfaEnrollmentStartSecurity;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentStartResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse?: shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse;
    statusCode: number;
}
