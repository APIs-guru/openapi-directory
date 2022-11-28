import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LifecycleOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activateUser - Activate User
     *
     * Activate User
    **/
    activateUser(req: operations.ActivateUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivateUserResponse>;
    /**
     * deactivateUser - Deactivate User
     *
     * Deactivate User
    **/
    deactivateUser(req: operations.DeactivateUserRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateUserResponse>;
    /**
     * resetPassword - Reset Password
     *
     * Reset Password
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * setTempPassword - Set Temp Password
     *
     * Set Temp Password
    **/
    setTempPassword(req: operations.SetTempPasswordRequest, config?: AxiosRequestConfig): Promise<operations.SetTempPasswordResponse>;
    /**
     * suspendUser - Suspend User
     *
     * Suspend User
    **/
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * unlockUser - Unlock User
     *
     * Unlock User
    **/
    unlockUser(req: operations.UnlockUserRequest, config?: AxiosRequestConfig): Promise<operations.UnlockUserResponse>;
    /**
     * unsuspendUser - Unsuspend User
     *
     * Unsuspend User
    **/
    unsuspendUser(req: operations.UnsuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.UnsuspendUserResponse>;
}
