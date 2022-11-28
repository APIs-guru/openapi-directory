import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesUpdatePathParams;
    request: shared.WritableDeviceInterfaceInput;
}
export declare class DcimInterfacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}
