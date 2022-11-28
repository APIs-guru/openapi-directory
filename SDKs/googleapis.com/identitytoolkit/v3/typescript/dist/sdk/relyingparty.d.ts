import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Relyingparty {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * identitytoolkitRelyingpartyCreateAuthUri - Creates the URI used by the IdP to authenticate the user.
    **/
    identitytoolkitRelyingpartyCreateAuthUri(req: operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse>;
    /**
     * identitytoolkitRelyingpartyDeleteAccount - Delete user account.
    **/
    identitytoolkitRelyingpartyDeleteAccount(req: operations.IdentitytoolkitRelyingpartyDeleteAccountRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyDeleteAccountResponse>;
    /**
     * identitytoolkitRelyingpartyDownloadAccount - Batch download user accounts.
    **/
    identitytoolkitRelyingpartyDownloadAccount(req: operations.IdentitytoolkitRelyingpartyDownloadAccountRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyDownloadAccountResponse>;
    /**
     * identitytoolkitRelyingpartyEmailLinkSignin - Reset password for a user.
    **/
    identitytoolkitRelyingpartyEmailLinkSignin(req: operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse>;
    /**
     * identitytoolkitRelyingpartyGetAccountInfo - Returns the account info.
    **/
    identitytoolkitRelyingpartyGetAccountInfo(req: operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse>;
    /**
     * identitytoolkitRelyingpartyGetOobConfirmationCode - Get a code for user action confirmation.
    **/
    identitytoolkitRelyingpartyGetOobConfirmationCode(req: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse>;
    /**
     * identitytoolkitRelyingpartyGetProjectConfig - Get project configuration.
    **/
    identitytoolkitRelyingpartyGetProjectConfig(req: operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse>;
    /**
     * identitytoolkitRelyingpartyGetPublicKeys - Get token signing public key.
    **/
    identitytoolkitRelyingpartyGetPublicKeys(req: operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse>;
    /**
     * identitytoolkitRelyingpartyGetRecaptchaParam - Get recaptcha secure param.
    **/
    identitytoolkitRelyingpartyGetRecaptchaParam(req: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse>;
    /**
     * identitytoolkitRelyingpartyResetPassword - Reset password for a user.
    **/
    identitytoolkitRelyingpartyResetPassword(req: operations.IdentitytoolkitRelyingpartyResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyResetPasswordResponse>;
    /**
     * identitytoolkitRelyingpartySendVerificationCode - Send SMS verification code.
    **/
    identitytoolkitRelyingpartySendVerificationCode(req: operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse>;
    /**
     * identitytoolkitRelyingpartySetAccountInfo - Set account info for a user.
    **/
    identitytoolkitRelyingpartySetAccountInfo(req: operations.IdentitytoolkitRelyingpartySetAccountInfoRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySetAccountInfoResponse>;
    /**
     * identitytoolkitRelyingpartySetProjectConfig - Set project configuration.
    **/
    identitytoolkitRelyingpartySetProjectConfig(req: operations.IdentitytoolkitRelyingpartySetProjectConfigRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySetProjectConfigResponse>;
    /**
     * identitytoolkitRelyingpartySignOutUser - Sign out user.
    **/
    identitytoolkitRelyingpartySignOutUser(req: operations.IdentitytoolkitRelyingpartySignOutUserRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySignOutUserResponse>;
    /**
     * identitytoolkitRelyingpartySignupNewUser - Signup new user.
    **/
    identitytoolkitRelyingpartySignupNewUser(req: operations.IdentitytoolkitRelyingpartySignupNewUserRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySignupNewUserResponse>;
    /**
     * identitytoolkitRelyingpartyUploadAccount - Batch upload existing user accounts.
    **/
    identitytoolkitRelyingpartyUploadAccount(req: operations.IdentitytoolkitRelyingpartyUploadAccountRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyUploadAccountResponse>;
    /**
     * identitytoolkitRelyingpartyVerifyAssertion - Verifies the assertion returned by the IdP.
    **/
    identitytoolkitRelyingpartyVerifyAssertion(req: operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse>;
    /**
     * identitytoolkitRelyingpartyVerifyCustomToken - Verifies the developer asserted ID token.
    **/
    identitytoolkitRelyingpartyVerifyCustomToken(req: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse>;
    /**
     * identitytoolkitRelyingpartyVerifyPassword - Verifies the user entered password.
    **/
    identitytoolkitRelyingpartyVerifyPassword(req: operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse>;
    /**
     * identitytoolkitRelyingpartyVerifyPhoneNumber - Verifies ownership of a phone number and creates/updates the user account accordingly.
    **/
    identitytoolkitRelyingpartyVerifyPhoneNumber(req: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>;
}
