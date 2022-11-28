import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationUplinksStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationUplinksStatusesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    iccids?: string[];
    networkIds?: string[];
    perPage?: number;
    serials?: string[];
    startingAfter?: string;
}
export declare class GetOrganizationUplinksStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationUplinksStatusesPathParams;
    queryParams: GetOrganizationUplinksStatusesQueryParams;
}
export declare class GetOrganizationUplinksStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationUplinksStatuses200ApplicationJsonObject?: Map<string, any>;
}
