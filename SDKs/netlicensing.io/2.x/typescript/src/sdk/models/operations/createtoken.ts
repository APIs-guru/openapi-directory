import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTokenRequestBodyActionEnum {
    LicenseeLogin = "licenseeLogin"
}

export enum CreateTokenRequestBodyApiKeyRoleEnum {
    RoleApikeyLicensee = "ROLE_APIKEY_LICENSEE"
,    RoleApikeyAnalytics = "ROLE_APIKEY_ANALYTICS"
,    RoleApikeyOperation = "ROLE_APIKEY_OPERATION"
,    RoleApikeyMaintenance = "ROLE_APIKEY_MAINTENANCE"
,    RoleApikeyAdmin = "ROLE_APIKEY_ADMIN"
}

export enum CreateTokenRequestBodyTokenTypeEnum {
    Default = "DEFAULT"
,    Shop = "SHOP"
,    Apikey = "APIKEY"
}

export enum CreateTokenRequestBodyTypeEnum {
    Action = "ACTION"
}


export class CreateTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=action;" })
  action?: CreateTokenRequestBodyActionEnum;

  @Metadata({ data: "form, name=apiKeyRole;" })
  apiKeyRole?: CreateTokenRequestBodyApiKeyRoleEnum;

  @Metadata({ data: "form, name=cancelURL;" })
  cancelUrl?: string;

  @Metadata({ data: "form, name=cancelURLTitle;" })
  cancelUrlTitle?: string;

  @Metadata({ data: "form, name=licenseTemplateNumber;" })
  licenseTemplateNumber?: string;

  @Metadata({ data: "form, name=licenseeNumber;" })
  licenseeNumber?: string;

  @Metadata({ data: "form, name=predefinedShoppingItem;" })
  predefinedShoppingItem?: string;

  @Metadata({ data: "form, name=privateKey;" })
  privateKey?: string;

  @Metadata({ data: "form, name=productNumber;" })
  productNumber?: string;

  @Metadata({ data: "form, name=successURL;" })
  successUrl?: string;

  @Metadata({ data: "form, name=successURLTitle;" })
  successUrlTitle?: string;

  @Metadata({ data: "form, name=tokenType;" })
  tokenType: CreateTokenRequestBodyTokenTypeEnum;

  @Metadata({ data: "form, name=type;" })
  type?: CreateTokenRequestBodyTypeEnum;
}


export class CreateTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateTokenRequestBody;

  @Metadata()
  security: CreateTokenSecurity;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
