import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    site?: string;
    siteId?: string;
    slug?: string;
}
export declare class IpamVlanGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VlanGroup[];
}
export declare class IpamVlanGroupsListRequest extends SpeakeasyBase {
    queryParams: IpamVlanGroupsListQueryParams;
}
export declare class IpamVlanGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVlanGroupsList200ApplicationJsonObject?: IpamVlanGroupsList200ApplicationJson;
}
