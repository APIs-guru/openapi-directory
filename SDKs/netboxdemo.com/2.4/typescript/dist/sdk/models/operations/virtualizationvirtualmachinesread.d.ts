import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationVirtualMachinesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationVirtualMachinesReadRequest extends SpeakeasyBase {
    pathParams: VirtualizationVirtualMachinesReadPathParams;
}
export declare class VirtualizationVirtualMachinesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualMachineWithConfigContext?: shared.VirtualMachineWithConfigContext;
}
