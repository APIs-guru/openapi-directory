import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterGroupsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class VirtualizationClusterGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ClusterGroup[];
}
export declare class VirtualizationClusterGroupsListRequest extends SpeakeasyBase {
    queryParams: VirtualizationClusterGroupsListQueryParams;
}
export declare class VirtualizationClusterGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationClusterGroupsList200ApplicationJsonObject?: VirtualizationClusterGroupsList200ApplicationJson;
}
