import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationVirtualMachinesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationVirtualMachinesUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationVirtualMachinesUpdatePathParams;
    request: shared.WritableVirtualMachineWithConfigContextInput;
}
export declare class VirtualizationVirtualMachinesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachineWithConfigContext?: shared.VirtualMachineWithConfigContext;
}
