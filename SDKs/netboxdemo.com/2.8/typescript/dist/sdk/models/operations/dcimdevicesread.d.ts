import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesReadRequest extends SpeakeasyBase {
    pathParams: DcimDevicesReadPathParams;
}
export declare class DcimDevicesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
}
