import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";
import { NestedTenant } from "./nestedtenant";
export declare class SiteStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Site extends SpeakeasyBase {
    asn?: number;
    comments?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    countCircuits?: number;
    countDevices?: number;
    countPrefixes?: number;
    countRacks?: number;
    countVlans?: number;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    facility?: string;
    id?: number;
    lastUpdated?: Date;
    latitude?: string;
    longitude?: string;
    name: string;
    physicalAddress?: string;
    region?: NestedRegion;
    shippingAddress?: string;
    slug: string;
    status?: SiteStatus;
    tags?: string[];
    tenant?: NestedTenant;
    timeZone?: string;
}
