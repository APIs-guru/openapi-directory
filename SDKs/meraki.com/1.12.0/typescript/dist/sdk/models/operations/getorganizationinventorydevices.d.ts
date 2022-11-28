import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationInventoryDevicesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationInventoryDevicesUsedStateEnum {
    Used = "used",
    Unused = "unused"
}
export declare class GetOrganizationInventoryDevicesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    search?: string;
    startingAfter?: string;
    usedState?: GetOrganizationInventoryDevicesUsedStateEnum;
}
export declare class GetOrganizationInventoryDevicesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationInventoryDevicesPathParams;
    queryParams: GetOrganizationInventoryDevicesQueryParams;
}
export declare class GetOrganizationInventoryDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationInventoryDevices200ApplicationJsonObject?: Map<string, any>;
}
