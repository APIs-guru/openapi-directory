import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingConfig } from "./billingconfig";
import { ServiceAccountConfig } from "./serviceaccountconfig";
import { TenantProjectPolicy } from "./tenantprojectpolicy";



// TenantProjectConfig
/** 
 * This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
**/
export class TenantProjectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingConfig" })
  billingConfig?: BillingConfig;

  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountConfig" })
  serviceAccountConfig?: ServiceAccountConfig;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenantProjectPolicy" })
  tenantProjectPolicy?: TenantProjectPolicy;
}
