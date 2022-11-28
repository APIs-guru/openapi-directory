import { SpeakeasyBase } from "../../../internal/utils";
import { NestedClusterGroup } from "./nestedclustergroup";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { NestedRegion } from "./nestedregion";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenantGroup } from "./nestedtenantgroup";
import { NestedTenant } from "./nestedtenant";
export declare class ConfigContext extends SpeakeasyBase {
    clusterGroups?: NestedClusterGroup[];
    clusters?: NestedCluster[];
    data: string;
    description?: string;
    id?: number;
    isActive?: boolean;
    name: string;
    platforms?: NestedPlatform[];
    regions?: NestedRegion[];
    roles?: NestedDeviceRole[];
    sites?: NestedSite[];
    tags?: string[];
    tenantGroups?: NestedTenantGroup[];
    tenants?: NestedTenant[];
    weight?: number;
}
