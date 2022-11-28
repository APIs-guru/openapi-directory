import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    site?: string;
    siteId?: string;
    slug?: string;
}
export declare class DcimRackGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackGroup[];
}
export declare class DcimRackGroupsListRequest extends SpeakeasyBase {
    queryParams: DcimRackGroupsListQueryParams;
}
export declare class DcimRackGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRackGroupsList200ApplicationJsonObject?: DcimRackGroupsList200ApplicationJson;
}
