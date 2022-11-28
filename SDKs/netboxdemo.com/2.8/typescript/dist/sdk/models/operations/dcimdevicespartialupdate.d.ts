import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDevicesPartialUpdatePathParams;
    request: shared.WritableDeviceWithConfigContextInput;
}
export declare class DcimDevicesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
}
