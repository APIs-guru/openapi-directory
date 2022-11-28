import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceInterfaceInput;
}
export declare class DcimInterfacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}
