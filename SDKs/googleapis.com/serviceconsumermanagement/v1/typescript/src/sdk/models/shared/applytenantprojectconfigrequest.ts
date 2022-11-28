import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";



// ApplyTenantProjectConfigRequest
/** 
 * Request to apply configuration to an existing tenant project.
**/
export class ApplyTenantProjectConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectConfig" })
  projectConfig?: TenantProjectConfig;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
