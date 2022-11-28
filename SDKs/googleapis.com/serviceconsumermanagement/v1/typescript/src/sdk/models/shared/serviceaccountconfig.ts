import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccountConfig
/** 
 * Describes the service account configuration for the tenant project.
**/
export class ServiceAccountConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectRoles" })
  tenantProjectRoles?: string[];
}
