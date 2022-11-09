import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig } from "./googlecloudidentitytoolkitadminv2clientpermissionconfig";
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
  @Metadata({ data: "json, name=allowPasswordSignup" })
  allowPasswordSignup?: boolean;

  @Metadata({ data: "json, name=autodeleteAnonymousUsers" })
  autodeleteAnonymousUsers?: boolean;

  @Metadata({ data: "json, name=client" })
  client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;

  @Metadata({ data: "json, name=disableAuth" })
  disableAuth?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableAnonymousUser" })
  enableAnonymousUser?: boolean;

  @Metadata({ data: "json, name=enableEmailLinkSignin" })
  enableEmailLinkSignin?: boolean;

  @Metadata({ data: "json, name=hashConfig" })
  hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;

  @Metadata({ data: "json, name=inheritance" })
  inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;

  @Metadata({ data: "json, name=mfaConfig" })
  mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=smsRegionConfig" })
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;

  @Metadata({ data: "json, name=testPhoneNumbers" })
  testPhoneNumbers?: Map<string, string>;
}
