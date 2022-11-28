import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationVirtualMachinesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationVirtualMachinesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationVirtualMachinesPartialUpdatePathParams;
    request: shared.WritableVirtualMachineInput;
}
export declare class VirtualizationVirtualMachinesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachine?: shared.VirtualMachine;
}
