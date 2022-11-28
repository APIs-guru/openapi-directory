import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesListQueryParams extends SpeakeasyBase {
    address?: string;
    assignedToInterface?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    device?: string;
    deviceId?: string;
    dnsName?: string;
    dnsNameIc?: string;
    dnsNameIe?: string;
    dnsNameIew?: string;
    dnsNameIsw?: string;
    dnsNameN?: string;
    dnsNameNic?: string;
    dnsNameNie?: string;
    dnsNameNiew?: string;
    dnsNameNisw?: string;
    family?: number;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    interface?: string;
    interfaceN?: string;
    interfaceId?: string;
    interfaceIdN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
    maskLength?: number;
    offset?: number;
    parent?: string;
    q?: string;
    role?: string;
    roleN?: string;
    status?: string;
    statusN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantGroup?: string;
    tenantGroupN?: string;
    tenantGroupId?: string;
    tenantGroupIdN?: string;
    tenantId?: string;
    tenantIdN?: string;
    virtualMachine?: string;
    virtualMachineN?: string;
    virtualMachineId?: string;
    virtualMachineIdN?: string;
    vrf?: string;
    vrfN?: string;
    vrfId?: string;
    vrfIdN?: string;
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
