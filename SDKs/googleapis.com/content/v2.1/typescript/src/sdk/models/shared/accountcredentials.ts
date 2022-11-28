import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountCredentialsPurposeEnum {
    AccountCredentialsPurposeUnspecified = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED",
    ShopifyOrderManagement = "SHOPIFY_ORDER_MANAGEMENT",
    ShopifyIntegration = "SHOPIFY_INTEGRATION"
}


// AccountCredentials
/** 
 * Credentials allowing Google to call a partner's API on behalf of a merchant.
**/
export class AccountCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: AccountCredentialsPurposeEnum;
}
