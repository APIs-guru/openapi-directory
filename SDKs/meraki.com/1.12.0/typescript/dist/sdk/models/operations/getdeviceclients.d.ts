import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceClientsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceClientsQueryParams extends SpeakeasyBase {
    t0?: string;
    timespan?: number;
}
export declare class GetDeviceClientsRequest extends SpeakeasyBase {
    pathParams: GetDeviceClientsPathParams;
    queryParams: GetDeviceClientsQueryParams;
}
export declare class GetDeviceClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceClients200ApplicationJsonObject?: Map<string, any>;
}
