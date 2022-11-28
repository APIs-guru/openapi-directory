import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationDevicesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationDevicesQueryParams extends SpeakeasyBase {
    configurationUpdatedAfter?: string;
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetOrganizationDevicesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationDevicesPathParams;
    queryParams: GetOrganizationDevicesQueryParams;
}
export declare class GetOrganizationDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationDevices200ApplicationJsonObject?: Map<string, any>;
}
