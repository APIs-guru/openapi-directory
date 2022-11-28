import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceInfoQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDeviceInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDeviceInfoRequest extends SpeakeasyBase {
    queryParams: GetDeviceInfoQueryParams;
    security: GetDeviceInfoSecurity;
}
export declare class GetDeviceInfoResponse extends SpeakeasyBase {
    contentType: string;
    deviceInfo?: shared.DeviceInfo;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
