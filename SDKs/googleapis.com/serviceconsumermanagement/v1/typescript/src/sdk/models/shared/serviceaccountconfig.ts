import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccountConfig
/** 
 * Describes the service account configuration for the tenant project.
**/
export class ServiceAccountConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=tenantProjectRoles" })
  tenantProjectRoles?: string[];
}
