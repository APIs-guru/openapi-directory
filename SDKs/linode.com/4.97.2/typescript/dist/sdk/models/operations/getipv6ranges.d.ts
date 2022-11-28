import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIPv6RangesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetIPv6RangesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetIPv6Ranges200ApplicationJson extends SpeakeasyBase {
    data?: shared.IPv6Range[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetIPv6RangesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetIPv6RangesRequest extends SpeakeasyBase {
    queryParams: GetIPv6RangesQueryParams;
    security: GetIPv6RangesSecurity;
}
export declare class GetIPv6RangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getIPv6Ranges200ApplicationJsonObject?: GetIPv6Ranges200ApplicationJson;
    getIPv6RangesDefaultApplicationJsonObject?: GetIPv6RangesDefaultApplicationJson;
}
