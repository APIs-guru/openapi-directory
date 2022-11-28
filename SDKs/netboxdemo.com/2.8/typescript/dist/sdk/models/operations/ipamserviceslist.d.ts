import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    device?: string;
    deviceN?: string;
    deviceId?: string;
    deviceIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
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
    port?: string;
    portGt?: string;
    portGte?: string;
    portLt?: string;
    portLte?: string;
    portN?: string;
    protocol?: string;
    protocolN?: string;
    q?: string;
    tag?: string;
    tagN?: string;
    virtualMachine?: string;
    virtualMachineN?: string;
    virtualMachineId?: string;
    virtualMachineIdN?: string;
}
export declare class IpamServicesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Service[];
}
export declare class IpamServicesListRequest extends SpeakeasyBase {
    queryParams: IpamServicesListQueryParams;
}
export declare class IpamServicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamServicesList200ApplicationJsonObject?: IpamServicesList200ApplicationJson;
}
