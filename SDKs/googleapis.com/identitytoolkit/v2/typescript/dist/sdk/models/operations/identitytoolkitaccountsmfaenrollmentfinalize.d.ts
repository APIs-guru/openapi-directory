import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
    security: IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse?: shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse;
    statusCode: number;
}
