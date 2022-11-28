import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationLoginSecurityPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationLoginSecurityRequestBody extends SpeakeasyBase {
    accountLockoutAttempts?: number;
    enforceAccountLockout?: boolean;
    enforceDifferentPasswords?: boolean;
    enforceIdleTimeout?: boolean;
    enforceLoginIpRanges?: boolean;
    enforcePasswordExpiration?: boolean;
    enforceStrongPasswords?: boolean;
    enforceTwoFactorAuth?: boolean;
    idleTimeoutMinutes?: number;
    loginIpRanges?: string[];
    numDifferentPasswords?: number;
    passwordExpirationDays?: number;
}
export declare class UpdateOrganizationLoginSecurityRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationLoginSecurityPathParams;
    request?: UpdateOrganizationLoginSecurityRequestBody;
}
export declare class UpdateOrganizationLoginSecurityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}
