import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceTypesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceTypesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceTypesPartialUpdatePathParams;
    request: shared.WritableDeviceTypeInput;
}
export declare class DcimDeviceTypesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
}
