import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountCredentialsPurposeEnum {
    AccountCredentialsPurposeUnspecified = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED",
    ShopifyOrderManagement = "SHOPIFY_ORDER_MANAGEMENT",
    ShopifyIntegration = "SHOPIFY_INTEGRATION"
}
/**
 * Credentials allowing Google to call a partner's API on behalf of a merchant.
**/
export declare class AccountCredentials extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: string;
    purpose?: AccountCredentialsPurposeEnum;
}
