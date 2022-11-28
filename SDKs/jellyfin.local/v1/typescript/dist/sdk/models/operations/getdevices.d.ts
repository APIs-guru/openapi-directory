import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicesQueryParams extends SpeakeasyBase {
    supportsSync?: boolean;
    userId?: string;
}
export declare class GetDevicesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    queryParams: GetDevicesQueryParams;
    security: GetDevicesSecurity;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    contentType: string;
    deviceInfoQueryResult?: shared.DeviceInfoQueryResult;
    statusCode: number;
}
