import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesReadRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesReadPathParams;
}
export declare class DcimInterfacesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}
