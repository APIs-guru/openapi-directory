import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterTypesListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class VirtualizationClusterTypesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ClusterType[];
}
export declare class VirtualizationClusterTypesListRequest extends SpeakeasyBase {
    queryParams: VirtualizationClusterTypesListQueryParams;
}
export declare class VirtualizationClusterTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationClusterTypesList200ApplicationJsonObject?: VirtualizationClusterTypesList200ApplicationJson;
}
