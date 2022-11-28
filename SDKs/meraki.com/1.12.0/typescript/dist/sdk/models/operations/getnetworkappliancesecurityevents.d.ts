import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceSecurityEventsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkApplianceSecurityEventsSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class GetNetworkApplianceSecurityEventsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    sortOrder?: GetNetworkApplianceSecurityEventsSortOrderEnum;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkApplianceSecurityEventsRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceSecurityEventsPathParams;
    queryParams: GetNetworkApplianceSecurityEventsQueryParams;
}
export declare class GetNetworkApplianceSecurityEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkApplianceSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
