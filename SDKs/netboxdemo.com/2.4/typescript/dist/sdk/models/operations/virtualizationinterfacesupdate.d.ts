import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationInterfacesUpdatePathParams;
    request: shared.WritableInterfaceInput;
}
export declare class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}
