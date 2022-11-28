import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    site?: string;
    siteId?: string;
    slug?: string;
}
export declare class ExtrasTopologyMapsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.TopologyMap[];
}
export declare class ExtrasTopologyMapsListRequest extends SpeakeasyBase {
    queryParams: ExtrasTopologyMapsListQueryParams;
}
export declare class ExtrasTopologyMapsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasTopologyMapsList200ApplicationJsonObject?: ExtrasTopologyMapsList200ApplicationJson;
}
