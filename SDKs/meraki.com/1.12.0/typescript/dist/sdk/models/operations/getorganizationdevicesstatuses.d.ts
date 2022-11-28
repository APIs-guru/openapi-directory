import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationDevicesStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationDevicesStatusesQueryParams extends SpeakeasyBase {
    components?: Map<string, any>;
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetOrganizationDevicesStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationDevicesStatusesPathParams;
    queryParams: GetOrganizationDevicesStatusesQueryParams;
}
export declare class GetOrganizationDevicesStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationDevicesStatuses200ApplicationJsonObject?: Map<string, any>;
}
