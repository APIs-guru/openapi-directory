import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApiRequestsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApiRequestsQueryParams extends SpeakeasyBase {
    adminId?: string;
    endingBefore?: string;
    method?: string;
    path?: string;
    perPage?: number;
    responseCode?: number;
    sourceIp?: string;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetOrganizationApiRequestsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApiRequestsPathParams;
    queryParams: GetOrganizationApiRequestsQueryParams;
}
export declare class GetOrganizationApiRequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationApiRequests200ApplicationJsonObject?: Map<string, any>;
}
