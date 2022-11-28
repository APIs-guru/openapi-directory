import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";
export declare class IpAddressRole extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class IpAddressStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class IpAddress extends SpeakeasyBase {
    address: string;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    family?: number;
    id?: number;
    interface?: IpAddressInterface;
    lastUpdated?: Date;
    natInside?: NestedIpAddress;
    natOutside?: NestedIpAddress;
    role?: IpAddressRole;
    status?: IpAddressStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vrf?: NestedVrf;
}
