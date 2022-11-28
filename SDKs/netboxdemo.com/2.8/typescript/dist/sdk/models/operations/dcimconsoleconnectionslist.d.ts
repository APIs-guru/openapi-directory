import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class DcimConsoleConnectionsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsolePort[];
}
export declare class DcimConsoleConnectionsListRequest extends SpeakeasyBase {
    queryParams: DcimConsoleConnectionsListQueryParams;
}
export declare class DcimConsoleConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimConsoleConnectionsList200ApplicationJsonObject?: DcimConsoleConnectionsList200ApplicationJson;
}
