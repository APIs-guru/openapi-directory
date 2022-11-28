import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBaysPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBaysPartialUpdatePathParams;
    request: shared.WritableDeviceBayInput;
}
export declare class DcimDeviceBaysPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBay?: shared.DeviceBay;
    statusCode: number;
}
