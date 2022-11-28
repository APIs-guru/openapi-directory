import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    tag?: string;
}
export declare class DcimConsolePortsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsolePort[];
}
export declare class DcimConsolePortsListRequest extends SpeakeasyBase {
    queryParams: DcimConsolePortsListQueryParams;
}
export declare class DcimConsolePortsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimConsolePortsList200ApplicationJsonObject?: DcimConsolePortsList200ApplicationJson;
}
