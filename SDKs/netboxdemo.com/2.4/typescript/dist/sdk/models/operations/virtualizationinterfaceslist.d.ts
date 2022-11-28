import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesListQueryParams extends SpeakeasyBase {
    enabled?: string;
    limit?: number;
    macAddress?: string;
    mtu?: number;
    name?: string;
    offset?: number;
    virtualMachine?: string;
    virtualMachineId?: string;
}
export declare class VirtualizationInterfacesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Interface[];
}
export declare class VirtualizationInterfacesListRequest extends SpeakeasyBase {
    queryParams: VirtualizationInterfacesListQueryParams;
}
export declare class VirtualizationInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationInterfacesList200ApplicationJsonObject?: VirtualizationInterfacesList200ApplicationJson;
}
