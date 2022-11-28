import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyNetworkSmDevicesTagsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class ModifyNetworkSmDevicesTagsRequestBody extends SpeakeasyBase {
    ids?: string[];
    scope?: string[];
    serials?: string[];
    tags: string[];
    updateAction: string;
    wifiMacs?: string[];
}
export declare class ModifyNetworkSmDevicesTagsRequest extends SpeakeasyBase {
    pathParams: ModifyNetworkSmDevicesTagsPathParams;
    request: ModifyNetworkSmDevicesTagsRequestBody;
}
export declare class ModifyNetworkSmDevicesTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    modifyNetworkSmDevicesTags200ApplicationJsonObject?: Map<string, any>;
}
