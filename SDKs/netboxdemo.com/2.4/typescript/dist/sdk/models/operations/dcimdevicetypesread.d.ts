import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceTypesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceTypesReadRequest extends SpeakeasyBase {
    pathParams: DcimDeviceTypesReadPathParams;
}
export declare class DcimDeviceTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceType?: shared.DeviceType;
    statusCode: number;
}
