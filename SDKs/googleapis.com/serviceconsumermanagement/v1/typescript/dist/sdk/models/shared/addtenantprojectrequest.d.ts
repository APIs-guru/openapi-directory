import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";
/**
 * Request to add a newly created and configured tenant project to a tenancy unit.
**/
export declare class AddTenantProjectRequest extends SpeakeasyBase {
    projectConfig?: TenantProjectConfig;
    tag?: string;
}
