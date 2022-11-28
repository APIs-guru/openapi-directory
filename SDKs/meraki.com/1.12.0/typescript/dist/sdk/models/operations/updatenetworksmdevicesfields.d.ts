import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSmDevicesFieldsPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The new fields of the device. Each field of this object is optional.
**/
export declare class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields extends SpeakeasyBase {
    name?: string;
    notes?: string;
}
export declare class UpdateNetworkSmDevicesFieldsRequestBody extends SpeakeasyBase {
    deviceFields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;
    id?: string;
    serial?: string;
    wifiMac?: string;
}
export declare class UpdateNetworkSmDevicesFieldsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSmDevicesFieldsPathParams;
    request: UpdateNetworkSmDevicesFieldsRequestBody;
}
export declare class UpdateNetworkSmDevicesFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSmDevicesFields200ApplicationJsonObject?: Map<string, any>;
}
