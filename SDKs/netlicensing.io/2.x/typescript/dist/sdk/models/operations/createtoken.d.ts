import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTokenRequestBodyActionEnum {
    LicenseeLogin = "licenseeLogin"
}
export declare enum CreateTokenRequestBodyApiKeyRoleEnum {
    RoleApikeyLicensee = "ROLE_APIKEY_LICENSEE",
    RoleApikeyAnalytics = "ROLE_APIKEY_ANALYTICS",
    RoleApikeyOperation = "ROLE_APIKEY_OPERATION",
    RoleApikeyMaintenance = "ROLE_APIKEY_MAINTENANCE",
    RoleApikeyAdmin = "ROLE_APIKEY_ADMIN"
}
export declare enum CreateTokenRequestBodyTokenTypeEnum {
    Default = "DEFAULT",
    Shop = "SHOP",
    Apikey = "APIKEY"
}
export declare enum CreateTokenRequestBodyTypeEnum {
    Action = "ACTION"
}
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    action?: CreateTokenRequestBodyActionEnum;
    apiKeyRole?: CreateTokenRequestBodyApiKeyRoleEnum;
    cancelUrl?: string;
    cancelUrlTitle?: string;
    licenseTemplateNumber?: string;
    licenseeNumber?: string;
    predefinedShoppingItem?: string;
    privateKey?: string;
    productNumber?: string;
    successUrl?: string;
    successUrlTitle?: string;
    tokenType: CreateTokenRequestBodyTokenTypeEnum;
    type?: CreateTokenRequestBodyTypeEnum;
}
export declare class CreateTokenSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    request: CreateTokenRequestBody;
    security: CreateTokenSecurity;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
