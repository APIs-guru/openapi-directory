import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationInterfacesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationInterfacesPartialUpdatePathParams;
    request: shared.WritableInterfaceInput;
}
export declare class VirtualizationInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}
