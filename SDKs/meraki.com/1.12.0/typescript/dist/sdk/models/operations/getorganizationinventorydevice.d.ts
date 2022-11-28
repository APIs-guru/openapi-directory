import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationInventoryDevicePathParams extends SpeakeasyBase {
    organizationId: string;
    serial: string;
}
export declare class GetOrganizationInventoryDeviceRequest extends SpeakeasyBase {
    pathParams: GetOrganizationInventoryDevicePathParams;
}
export declare class GetOrganizationInventoryDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationInventoryDevice200ApplicationJsonObject?: Map<string, any>;
}
