import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    tag?: string;
}
export declare class DcimConsoleServerPortsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsoleServerPort[];
}
export declare class DcimConsoleServerPortsListRequest extends SpeakeasyBase {
    queryParams: DcimConsoleServerPortsListQueryParams;
}
export declare class DcimConsoleServerPortsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimConsoleServerPortsList200ApplicationJsonObject?: DcimConsoleServerPortsList200ApplicationJson;
}
