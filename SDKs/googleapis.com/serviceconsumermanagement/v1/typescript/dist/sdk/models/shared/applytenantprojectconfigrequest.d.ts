import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";
/**
 * Request to apply configuration to an existing tenant project.
**/
export declare class ApplyTenantProjectConfigRequest extends SpeakeasyBase {
    projectConfig?: TenantProjectConfig;
    tag?: string;
}
