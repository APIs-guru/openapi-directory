import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsListQueryParams extends SpeakeasyBase {
    allocatedDraw?: string;
    allocatedDrawGt?: string;
    allocatedDrawGte?: string;
    allocatedDrawLt?: string;
    allocatedDrawLte?: string;
    allocatedDrawN?: string;
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
    deviceN?: string;
    deviceId?: string;
    deviceIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    maximumDraw?: string;
    maximumDrawGt?: string;
    maximumDrawGte?: string;
    maximumDrawLt?: string;
    maximumDrawLte?: string;
    maximumDrawN?: string;
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
}
export declare class DcimPowerPortsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPort[];
}
export declare class DcimPowerPortsListRequest extends SpeakeasyBase {
    queryParams: DcimPowerPortsListQueryParams;
}
export declare class DcimPowerPortsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerPortsList200ApplicationJsonObject?: DcimPowerPortsList200ApplicationJson;
}
