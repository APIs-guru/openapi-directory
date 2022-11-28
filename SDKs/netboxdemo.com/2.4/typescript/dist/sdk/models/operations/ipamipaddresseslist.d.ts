import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesListQueryParams extends SpeakeasyBase {
    address?: string;
    device?: string;
    deviceId?: number;
    family?: string;
    idIn?: string;
    interfaceId?: string;
    limit?: number;
    maskLength?: number;
    offset?: number;
    parent?: string;
    q?: string;
    role?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    virtualMachine?: string;
    virtualMachineId?: string;
    vrf?: string;
    vrfId?: string;
}
export declare class IpamIpAddressesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.IpAddress[];
}
export declare class IpamIpAddressesListRequest extends SpeakeasyBase {
    queryParams: IpamIpAddressesListQueryParams;
}
export declare class IpamIpAddressesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamIpAddressesList200ApplicationJsonObject?: IpamIpAddressesList200ApplicationJson;
}
