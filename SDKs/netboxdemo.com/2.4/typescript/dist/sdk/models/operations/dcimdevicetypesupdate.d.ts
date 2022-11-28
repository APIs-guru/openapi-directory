import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceTypesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceTypesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceTypesUpdatePathParams;
    request: shared.WritableDeviceTypeInput;
}
export declare class DcimDeviceTypesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
}
