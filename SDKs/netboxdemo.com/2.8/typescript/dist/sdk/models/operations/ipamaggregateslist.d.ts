import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    dateAdded?: string;
    dateAddedGt?: string;
    dateAddedGte?: string;
    dateAddedLt?: string;
    dateAddedLte?: string;
    dateAddedN?: string;
    family?: number;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
    offset?: number;
    prefix?: string;
    q?: string;
    rir?: string;
    rirN?: string;
    rirId?: string;
    rirIdN?: string;
    tag?: string;
    tagN?: string;
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
