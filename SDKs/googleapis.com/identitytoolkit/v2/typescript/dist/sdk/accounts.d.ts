import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * identitytoolkitAccountsMfaEnrollmentFinalize - Finishes enrolling a second factor for the user.
    **/
    identitytoolkitAccountsMfaEnrollmentFinalize(req: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse>;
    /**
     * identitytoolkitAccountsMfaEnrollmentStart - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
    **/
    identitytoolkitAccountsMfaEnrollmentStart(req: operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse>;
    /**
     * identitytoolkitAccountsMfaEnrollmentWithdraw - Revokes one second factor from the enrolled second factors for an account.
    **/
    identitytoolkitAccountsMfaEnrollmentWithdraw(req: operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse>;
    /**
     * identitytoolkitAccountsMfaSignInFinalize - Verifies the MFA challenge and performs sign-in
    **/
    identitytoolkitAccountsMfaSignInFinalize(req: operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse>;
    /**
     * identitytoolkitAccountsMfaSignInStart - Sends the MFA challenge
    **/
    identitytoolkitAccountsMfaSignInStart(req: operations.IdentitytoolkitAccountsMfaSignInStartRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaSignInStartResponse>;
}
