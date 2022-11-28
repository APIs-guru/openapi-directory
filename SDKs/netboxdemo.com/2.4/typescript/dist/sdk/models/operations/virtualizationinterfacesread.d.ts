import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationInterfacesReadRequest extends SpeakeasyBase {
    pathParams: VirtualizationInterfacesReadPathParams;
}
export declare class VirtualizationInterfacesReadResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}
