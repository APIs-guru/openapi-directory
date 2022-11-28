import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";
export declare class Tenant extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    group?: NestedTenantGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    slug: string;
    tags?: string[];
}
