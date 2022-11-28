import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationVirtualMachinesCreateRequest extends SpeakeasyBase {
    request: shared.WritableVirtualMachineInput;
}
export declare class VirtualizationVirtualMachinesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachine?: shared.VirtualMachine;
}
