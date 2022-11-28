import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesNapalmPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesNapalmRequest extends SpeakeasyBase {
    pathParams: DcimDevicesNapalmPathParams;
}
export declare class DcimDevicesNapalmResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
