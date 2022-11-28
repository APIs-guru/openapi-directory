import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRegionsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    parent?: string;
    parentId?: string;
    q?: string;
    slug?: string;
}
export declare class DcimRegionsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Region[];
}
export declare class DcimRegionsListRequest extends SpeakeasyBase {
    queryParams: DcimRegionsListQueryParams;
}
export declare class DcimRegionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRegionsList200ApplicationJsonObject?: DcimRegionsList200ApplicationJson;
}
