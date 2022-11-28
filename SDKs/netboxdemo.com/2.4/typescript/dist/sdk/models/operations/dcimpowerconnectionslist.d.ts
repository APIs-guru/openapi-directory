import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerConnectionsListQueryParams extends SpeakeasyBase {
    connectionStatus?: string;
    device?: string;
    limit?: number;
    name?: string;
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
