import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";


// ApplyTenantProjectConfigRequest
/** 
 * Request to apply configuration to an existing tenant project.
**/
export class ApplyTenantProjectConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectConfig" })
  projectConfig?: TenantProjectConfig;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
