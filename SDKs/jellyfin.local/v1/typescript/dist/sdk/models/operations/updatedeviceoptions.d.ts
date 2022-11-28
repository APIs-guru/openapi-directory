import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDeviceOptionsQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDeviceOptionsRequests extends SpeakeasyBase {
    deviceOptions?: shared.DeviceOptions;
    deviceOptions1?: shared.DeviceOptions;
    deviceOptions2?: shared.DeviceOptions;
}
export declare class UpdateDeviceOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateDeviceOptionsRequest extends SpeakeasyBase {
    queryParams: UpdateDeviceOptionsQueryParams;
    request: UpdateDeviceOptionsRequests;
    security: UpdateDeviceOptionsSecurity;
}
export declare class UpdateDeviceOptionsResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
