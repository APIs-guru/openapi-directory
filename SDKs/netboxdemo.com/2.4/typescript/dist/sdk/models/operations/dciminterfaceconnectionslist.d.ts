import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceConnectionsListQueryParams extends SpeakeasyBase {
    connectionStatus?: string;
    device?: string;
    limit?: number;
    offset?: number;
    site?: string;
}
export declare class DcimInterfaceConnectionsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InterfaceConnection[];
}
export declare class DcimInterfaceConnectionsListRequest extends SpeakeasyBase {
    queryParams: DcimInterfaceConnectionsListQueryParams;
}
export declare class DcimInterfaceConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInterfaceConnectionsList200ApplicationJsonObject?: DcimInterfaceConnectionsList200ApplicationJson;
}
