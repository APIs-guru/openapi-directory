import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceOptionsQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDeviceOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDeviceOptionsRequest extends SpeakeasyBase {
    queryParams: GetDeviceOptionsQueryParams;
    security: GetDeviceOptionsSecurity;
}
export declare class GetDeviceOptionsResponse extends SpeakeasyBase {
    contentType: string;
    deviceOptions?: shared.DeviceOptions;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
