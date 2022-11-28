import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesCreateRequest extends SpeakeasyBase {
    request: shared.WritableVirtualMachineInterfaceInput;
}
export declare class VirtualizationInterfacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachineInterface?: shared.VirtualMachineInterface;
}
