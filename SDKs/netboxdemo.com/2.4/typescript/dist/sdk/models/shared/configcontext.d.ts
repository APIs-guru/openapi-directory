import { SpeakeasyBase } from "../../../internal/utils";
import { NestedPlatform } from "./nestedplatform";
import { NestedRegion } from "./nestedregion";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenantGroup } from "./nestedtenantgroup";
import { NestedTenant } from "./nestedtenant";
export declare class ConfigContext extends SpeakeasyBase {
    data: string;
    description?: string;
    id?: number;
    isActive?: boolean;
    name: string;
    platforms?: NestedPlatform[];
    regions?: NestedRegion[];
    roles?: NestedDeviceRole[];
    sites?: NestedSite[];
    tenantGroups?: NestedTenantGroup[];
    tenants?: NestedTenant[];
    weight?: number;
}
