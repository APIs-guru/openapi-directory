import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesListQueryParams extends SpeakeasyBase {
    cabled?: string;
    connectionStatus?: string;
    connectionStatusN?: string;
    description?: string;
    descriptionIc?: string;
    descriptionIe?: string;
    descriptionIew?: string;
    descriptionIsw?: string;
    descriptionN?: string;
    descriptionNic?: string;
    descriptionNie?: string;
    descriptionNiew?: string;
    descriptionNisw?: string;
    device?: string;
    deviceId?: string;
    enabled?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    kind?: string;
    lagId?: string;
    lagIdN?: string;
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
    mgmtOnly?: string;
    mode?: string;
    modeN?: string;
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
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tag?: string;
    tagN?: string;
    type?: string;
    typeN?: string;
    vlan?: string;
    vlanId?: string;
}
export declare class DcimInterfacesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceInterface[];
}
export declare class DcimInterfacesListRequest extends SpeakeasyBase {
    queryParams: DcimInterfacesListQueryParams;
}
export declare class DcimInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInterfacesList200ApplicationJsonObject?: DcimInterfacesList200ApplicationJson;
}
