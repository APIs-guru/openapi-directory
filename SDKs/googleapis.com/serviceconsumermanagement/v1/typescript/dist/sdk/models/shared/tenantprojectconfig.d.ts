import { SpeakeasyBase } from "../../../internal/utils";
import { BillingConfig } from "./billingconfig";
import { ServiceAccountConfig } from "./serviceaccountconfig";
import { TenantProjectPolicy } from "./tenantprojectpolicy";
/**
 * This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
**/
export declare class TenantProjectConfig extends SpeakeasyBase {
    billingConfig?: BillingConfig;
    folder?: string;
    labels?: Map<string, string>;
    serviceAccountConfig?: ServiceAccountConfig;
    services?: string[];
    tenantProjectPolicy?: TenantProjectPolicy;
}
