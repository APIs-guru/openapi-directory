import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApplianceSecurityEventsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationApplianceSecurityEventsSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class GetOrganizationApplianceSecurityEventsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    sortOrder?: GetOrganizationApplianceSecurityEventsSortOrderEnum;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetOrganizationApplianceSecurityEventsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApplianceSecurityEventsPathParams;
    queryParams: GetOrganizationApplianceSecurityEventsQueryParams;
}
export declare class GetOrganizationApplianceSecurityEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationApplianceSecurityEvents200ApplicationJsonObject?: Map<string, any>;
}
