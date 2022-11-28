import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceBayInput;
}
export declare class DcimDeviceBaysCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBay?: shared.DeviceBay;
    statusCode: number;
}
