import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesListQueryParams extends SpeakeasyBase {
    contains?: string;
    family?: string;
    idIn?: string;
    isPool?: string;
    limit?: number;
    maskLength?: number;
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
    vlanId?: string;
    vlanVid?: number;
    vrf?: string;
    vrfId?: string;
    within?: string;
    withinInclude?: string;
}
export declare class IpamPrefixesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Prefix[];
}
export declare class IpamPrefixesListRequest extends SpeakeasyBase {
    queryParams: IpamPrefixesListQueryParams;
}
export declare class IpamPrefixesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamPrefixesList200ApplicationJsonObject?: IpamPrefixesList200ApplicationJson;
}
