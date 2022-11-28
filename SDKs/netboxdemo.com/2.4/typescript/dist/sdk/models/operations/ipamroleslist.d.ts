import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class IpamRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Role[];
}
export declare class IpamRolesListRequest extends SpeakeasyBase {
    queryParams: IpamRolesListQueryParams;
}
export declare class IpamRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamRolesList200ApplicationJsonObject?: IpamRolesList200ApplicationJson;
}
