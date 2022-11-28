import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceTypesCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceTypeInput;
}
export declare class DcimDeviceTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
}
