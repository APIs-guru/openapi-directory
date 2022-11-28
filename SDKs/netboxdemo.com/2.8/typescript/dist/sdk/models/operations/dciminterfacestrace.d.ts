import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesTraceRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesTracePathParams;
}
export declare class DcimInterfacesTraceResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}
