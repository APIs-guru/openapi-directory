import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerConnectionsListQueryParams extends SpeakeasyBase {
    connectionStatus?: string;
    connectionStatusN?: string;
    device?: string;
    deviceId?: string;
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
    site?: string;
}
export declare class DcimPowerConnectionsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPort[];
}
export declare class DcimPowerConnectionsListRequest extends SpeakeasyBase {
    queryParams: DcimPowerConnectionsListQueryParams;
}
export declare class DcimPowerConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerConnectionsList200ApplicationJsonObject?: DcimPowerConnectionsList200ApplicationJson;
}
