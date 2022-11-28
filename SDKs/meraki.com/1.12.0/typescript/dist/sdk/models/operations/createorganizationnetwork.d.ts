import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationNetworkPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum CreateOrganizationNetworkRequestBodyProductTypesEnum {
    Wireless = "wireless",
    Appliance = "appliance",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Sensor = "sensor",
    Environmental = "environmental"
}
export declare class CreateOrganizationNetworkRequestBody extends SpeakeasyBase {
    copyFromNetworkId?: string;
    name: string;
    notes?: string;
    productTypes: CreateOrganizationNetworkRequestBodyProductTypesEnum[];
    tags?: string[];
    timeZone?: string;
}
export declare class CreateOrganizationNetworkRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationNetworkPathParams;
    request: CreateOrganizationNetworkRequestBody;
}
export declare class CreateOrganizationNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationNetwork201ApplicationJsonObject?: Map<string, any>;
}
