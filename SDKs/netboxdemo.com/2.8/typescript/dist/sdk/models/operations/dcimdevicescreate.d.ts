import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceWithConfigContextInput;
}
export declare class DcimDevicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
}
