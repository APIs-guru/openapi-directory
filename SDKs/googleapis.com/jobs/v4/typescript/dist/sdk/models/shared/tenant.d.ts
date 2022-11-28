import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups.
**/
export declare class Tenant extends SpeakeasyBase {
    externalId?: string;
    name?: string;
}
