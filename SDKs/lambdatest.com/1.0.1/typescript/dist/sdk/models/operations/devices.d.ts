import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DevicesQueryParams extends SpeakeasyBase {
    os?: string;
}
export declare class DevicesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DevicesRequest extends SpeakeasyBase {
    queryParams: DevicesQueryParams;
    security: DevicesSecurity;
}
export declare class DevicesResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    statusCode: number;
    osDevices?: any;
}
