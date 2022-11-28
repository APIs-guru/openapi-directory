import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateTokenRequestBodyActionEnum {
    LicenseeLogin = "licenseeLogin"
}

export enum CreateTokenRequestBodyApiKeyRoleEnum {
    RoleApikeyLicensee = "ROLE_APIKEY_LICENSEE",
    RoleApikeyAnalytics = "ROLE_APIKEY_ANALYTICS",
    RoleApikeyOperation = "ROLE_APIKEY_OPERATION",
    RoleApikeyMaintenance = "ROLE_APIKEY_MAINTENANCE",
    RoleApikeyAdmin = "ROLE_APIKEY_ADMIN"
}

export enum CreateTokenRequestBodyTokenTypeEnum {
    Default = "DEFAULT",
    Shop = "SHOP",
    Apikey = "APIKEY"
}

export enum CreateTokenRequestBodyTypeEnum {
    Action = "ACTION"
}


export class CreateTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=action;" })
  action?: CreateTokenRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "form, name=apiKeyRole;" })
  apiKeyRole?: CreateTokenRequestBodyApiKeyRoleEnum;

  @SpeakeasyMetadata({ data: "form, name=cancelURL;" })
  cancelUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=cancelURLTitle;" })
  cancelUrlTitle?: string;

  @SpeakeasyMetadata({ data: "form, name=licenseTemplateNumber;" })
  licenseTemplateNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=licenseeNumber;" })
  licenseeNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=predefinedShoppingItem;" })
  predefinedShoppingItem?: string;

  @SpeakeasyMetadata({ data: "form, name=privateKey;" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "form, name=productNumber;" })
  productNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=successURL;" })
  successUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=successURLTitle;" })
  successUrlTitle?: string;

  @SpeakeasyMetadata({ data: "form, name=tokenType;" })
  tokenType: CreateTokenRequestBodyTokenTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=type;" })
  type?: CreateTokenRequestBodyTypeEnum;
}


export class CreateTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateTokenRequestBody;

  @SpeakeasyMetadata()
  security: CreateTokenSecurity;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
