import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceClientSecurityEventsPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare enum GetNetworkApplianceClientSecurityEventsSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class GetNetworkApplianceClientSecurityEventsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    sortOrder?: GetNetworkApplianceClientSecurityEventsSortOrderEnum;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkApplianceClientSecurityEventsRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceClientSecurityEventsPathParams;
    queryParams: GetNetworkApplianceClientSecurityEventsQueryParams;
}
export declare class GetNetworkApplianceClientSecurityEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkApplianceClientSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
