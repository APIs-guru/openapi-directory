import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceInput;
}
export declare class DcimDevicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
