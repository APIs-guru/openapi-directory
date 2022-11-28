import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBaysUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBaysUpdatePathParams;
    request: shared.WritableDeviceBayInput;
}
export declare class DcimDeviceBaysUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBay?: shared.DeviceBay;
    statusCode: number;
}
