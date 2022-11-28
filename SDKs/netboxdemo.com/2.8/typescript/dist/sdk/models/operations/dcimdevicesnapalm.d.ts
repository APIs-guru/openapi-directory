import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesNapalmPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesNapalmQueryParams extends SpeakeasyBase {
    method: string;
}
export declare class DcimDevicesNapalmRequest extends SpeakeasyBase {
    pathParams: DcimDevicesNapalmPathParams;
    queryParams: DcimDevicesNapalmQueryParams;
}
export declare class DcimDevicesNapalmResponse extends SpeakeasyBase {
    contentType: string;
    deviceNapalm?: shared.DeviceNapalm;
    statusCode: number;
}
