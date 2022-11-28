import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationInterfacesUpdatePathParams;
    request: shared.WritableVirtualMachineInterfaceInput;
}
export declare class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachineInterface?: shared.VirtualMachineInterface;
}
