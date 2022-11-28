import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    tag?: string;
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
