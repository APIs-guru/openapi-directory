import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";


// AddTenantProjectRequest
/** 
 * Request to add a newly created and configured tenant project to a tenancy unit.
**/
export class AddTenantProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectConfig" })
  projectConfig?: TenantProjectConfig;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
