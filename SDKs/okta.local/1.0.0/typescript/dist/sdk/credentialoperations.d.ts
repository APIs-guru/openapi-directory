import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CredentialOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changePassword - Change Password
     *
     * Change Password
    **/
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * changeRecoveryQuestion - Change Recovery Question
     *
     * Change Recovery Question
    **/
    changeRecoveryQuestion(req: operations.ChangeRecoveryQuestionRequest, config?: AxiosRequestConfig): Promise<operations.ChangeRecoveryQuestionResponse>;
    /**
     * forgotPasswordOneTimeCode - Forgot Password (One Time Code)
     *
     * Forgot Password (One Time Code)
    **/
    forgotPasswordOneTimeCode(req: operations.ForgotPasswordOneTimeCodeRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordOneTimeCodeResponse>;
    /**
     * setRecoveryCredential - Set Recovery Credential
     *
     * Set Recovery Credential
    **/
    setRecoveryCredential(req: operations.SetRecoveryCredentialRequest, config?: AxiosRequestConfig): Promise<operations.SetRecoveryCredentialResponse>;
}
