import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesPartialUpdatePathParams;
    request: shared.WritableDeviceInterfaceInput;
}
export declare class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}
