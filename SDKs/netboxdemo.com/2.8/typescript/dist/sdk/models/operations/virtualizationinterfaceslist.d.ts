import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesListQueryParams extends SpeakeasyBase {
    enabled?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    macAddress?: string;
    macAddressIc?: string;
    macAddressIe?: string;
    macAddressIew?: string;
    macAddressIsw?: string;
    macAddressN?: string;
    macAddressNic?: string;
    macAddressNie?: string;
    macAddressNiew?: string;
    macAddressNisw?: string;
    mtu?: string;
    mtuGt?: string;
    mtuGte?: string;
    mtuLt?: string;
    mtuLte?: string;
    mtuN?: string;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    q?: string;
    virtualMachine?: string;
    virtualMachineN?: string;
    virtualMachineId?: string;
    virtualMachineIdN?: string;
}
export declare class VirtualizationInterfacesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualMachineInterface[];
}
export declare class VirtualizationInterfacesListRequest extends SpeakeasyBase {
    queryParams: VirtualizationInterfacesListQueryParams;
}
export declare class VirtualizationInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationInterfacesList200ApplicationJsonObject?: VirtualizationInterfacesList200ApplicationJson;
}
