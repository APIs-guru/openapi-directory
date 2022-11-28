import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesListQueryParams extends SpeakeasyBase {
    dateAdded?: string;
    family?: string;
    idIn?: string;
    limit?: number;
    offset?: number;
    q?: string;
    rir?: string;
    rirId?: string;
    tag?: string;
}
export declare class IpamAggregatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Aggregate[];
}
export declare class IpamAggregatesListRequest extends SpeakeasyBase {
    queryParams: IpamAggregatesListQueryParams;
}
export declare class IpamAggregatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamAggregatesList200ApplicationJsonObject?: IpamAggregatesList200ApplicationJson;
}
