import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClustersListQueryParams extends SpeakeasyBase {
    group?: string;
    groupId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    site?: string;
    siteId?: string;
    tag?: string;
    type?: string;
    typeId?: string;
}
export declare class VirtualizationClustersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Cluster[];
}
export declare class VirtualizationClustersListRequest extends SpeakeasyBase {
    queryParams: VirtualizationClustersListQueryParams;
}
export declare class VirtualizationClustersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationClustersList200ApplicationJsonObject?: VirtualizationClustersList200ApplicationJson;
}
