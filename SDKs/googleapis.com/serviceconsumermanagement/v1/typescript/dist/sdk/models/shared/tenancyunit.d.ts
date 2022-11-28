import { SpeakeasyBase } from "../../../internal/utils";
import { TenantResource } from "./tenantresource";
/**
 * Representation of a tenancy unit.
**/
export declare class TenancyUnit extends SpeakeasyBase {
    consumer?: string;
    createTime?: string;
    name?: string;
    service?: string;
    tenantResources?: TenantResource[];
}
