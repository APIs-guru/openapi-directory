import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest;
    security: IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity;
}
export declare class IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitV2WithdrawMfaResponse?: shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse;
    statusCode: number;
}
