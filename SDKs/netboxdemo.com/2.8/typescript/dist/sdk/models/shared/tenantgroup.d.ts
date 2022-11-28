import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";
export declare class TenantGroup extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    parent?: NestedTenantGroup;
    slug: string;
    tenantCount?: number;
}
