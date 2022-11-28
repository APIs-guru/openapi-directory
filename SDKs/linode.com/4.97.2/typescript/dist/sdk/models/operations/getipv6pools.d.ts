import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIPv6PoolsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetIPv6PoolsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetIPv6Pools200ApplicationJson extends SpeakeasyBase {
    data?: shared.IPv6Pool[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetIPv6PoolsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetIPv6PoolsRequest extends SpeakeasyBase {
    queryParams: GetIPv6PoolsQueryParams;
    security: GetIPv6PoolsSecurity;
}
export declare class GetIPv6PoolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getIPv6Pools200ApplicationJsonObject?: GetIPv6Pools200ApplicationJson;
    getIPv6PoolsDefaultApplicationJsonObject?: GetIPv6PoolsDefaultApplicationJson;
}
