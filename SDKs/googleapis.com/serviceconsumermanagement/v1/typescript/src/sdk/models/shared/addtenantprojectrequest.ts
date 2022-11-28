import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";



// AddTenantProjectRequest
/** 
 * Request to add a newly created and configured tenant project to a tenancy unit.
**/
export class AddTenantProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectConfig" })
  projectConfig?: TenantProjectConfig;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
