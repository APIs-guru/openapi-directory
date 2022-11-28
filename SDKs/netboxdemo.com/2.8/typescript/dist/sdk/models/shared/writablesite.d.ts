import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableSiteStatusEnum {
    Active = "active",
    Planned = "planned",
    Retired = "retired"
}
export declare class WritableSiteInput extends SpeakeasyBase {
    asn?: number;
    comments?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    customFields?: Map<string, any>;
    description?: string;
    facility?: string;
    latitude?: string;
    longitude?: string;
    name: string;
    physicalAddress?: string;
    region?: number;
    shippingAddress?: string;
    slug: string;
    status?: WritableSiteStatusEnum;
    tags?: string[];
    tenant?: number;
    timeZone?: string;
}
