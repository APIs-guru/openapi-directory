import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDevicesUpdatePathParams;
    request: shared.WritableDeviceInput;
}
export declare class DcimDevicesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
