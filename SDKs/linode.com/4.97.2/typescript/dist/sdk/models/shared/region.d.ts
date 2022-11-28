import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegionResolvers extends SpeakeasyBase {
    ipv4?: string;
    ipv6?: string;
}
export declare enum RegionStatusEnum {
    Ok = "ok",
    Outage = "outage"
}
/**
 * An area where Linode services are available.
**/
export declare class Region extends SpeakeasyBase {
    capabilities?: string[];
    country?: string;
    id?: string;
    resolvers?: RegionResolvers;
    status?: RegionStatusEnum;
}
