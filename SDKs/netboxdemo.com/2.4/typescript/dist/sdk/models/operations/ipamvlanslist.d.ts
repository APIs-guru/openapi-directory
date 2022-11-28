import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansListQueryParams extends SpeakeasyBase {
    group?: string;
    groupId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    vid?: number;
}
export declare class IpamVlansList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vlan[];
}
export declare class IpamVlansListRequest extends SpeakeasyBase {
    queryParams: IpamVlansListQueryParams;
}
export declare class IpamVlansListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVlansList200ApplicationJsonObject?: IpamVlansList200ApplicationJson;
}
