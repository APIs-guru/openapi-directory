import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tenant
/** 
 * A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups.
**/
export class Tenant extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
