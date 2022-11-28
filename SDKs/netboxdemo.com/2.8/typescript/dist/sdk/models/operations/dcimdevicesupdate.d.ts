import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDevicesUpdatePathParams;
    request: shared.WritableDeviceWithConfigContextInput;
}
export declare class DcimDevicesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
}
