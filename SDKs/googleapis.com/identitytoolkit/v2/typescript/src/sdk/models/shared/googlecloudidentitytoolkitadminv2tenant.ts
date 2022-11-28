import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig } from "./googlecloudidentitytoolkitadminv2clientpermissionconfig";
import { GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig } from "./googlecloudidentitytoolkitadminv2emailprivacyconfig";
import { GoogleCloudIdentitytoolkitAdminV2HashConfig } from "./googlecloudidentitytoolkitadminv2hashconfig";
import { GoogleCloudIdentitytoolkitAdminV2Inheritance } from "./googlecloudidentitytoolkitadminv2inheritance";
import { GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig } from "./googlecloudidentitytoolkitadminv2multifactorauthconfig";
import { GoogleCloudIdentitytoolkitAdminV2MonitoringConfig } from "./googlecloudidentitytoolkitadminv2monitoringconfig";
import { GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig } from "./googlecloudidentitytoolkitadminv2smsregionconfig";



// GoogleCloudIdentitytoolkitAdminV2Tenant
/** 
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
export class GoogleCloudIdentitytoolkitAdminV2Tenant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPasswordSignup" })
  allowPasswordSignup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autodeleteAnonymousUsers" })
  autodeleteAnonymousUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;

  @SpeakeasyMetadata({ data: "json, name=disableAuth" })
  disableAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailPrivacyConfig" })
  emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;

  @SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" })
  enableAnonymousUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableEmailLinkSignin" })
  enableEmailLinkSignin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hashConfig" })
  hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;

  @SpeakeasyMetadata({ data: "json, name=inheritance" })
  inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;

  @SpeakeasyMetadata({ data: "json, name=mfaConfig" })
  mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smsRegionConfig" })
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;

  @SpeakeasyMetadata({ data: "json, name=testPhoneNumbers" })
  testPhoneNumbers?: Map<string, string>;
}


// GoogleCloudIdentitytoolkitAdminV2TenantInput
/** 
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
export class GoogleCloudIdentitytoolkitAdminV2TenantInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPasswordSignup" })
  allowPasswordSignup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autodeleteAnonymousUsers" })
  autodeleteAnonymousUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;

  @SpeakeasyMetadata({ data: "json, name=disableAuth" })
  disableAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailPrivacyConfig" })
  emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;

  @SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" })
  enableAnonymousUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableEmailLinkSignin" })
  enableEmailLinkSignin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inheritance" })
  inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;

  @SpeakeasyMetadata({ data: "json, name=mfaConfig" })
  mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=smsRegionConfig" })
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;

  @SpeakeasyMetadata({ data: "json, name=testPhoneNumbers" })
  testPhoneNumbers?: Map<string, string>;
}
