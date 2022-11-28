import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBaysReadRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBaysReadPathParams;
}
export declare class DcimDeviceBaysReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceBay?: shared.DeviceBay;
    statusCode: number;
}
