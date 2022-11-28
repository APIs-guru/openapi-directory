import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedVirtualMachine } from "./nestedvirtualmachine";
export declare class IpAddressInterface extends SpeakeasyBase {
    device?: NestedDevice;
    id?: number;
    name: string;
    url?: string;
    virtualMachine?: NestedVirtualMachine;
}
