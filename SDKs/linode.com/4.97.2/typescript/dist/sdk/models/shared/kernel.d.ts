import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KernelArchitectureEnum {
    X8664 = "x86_64",
    I386 = "i386"
}
/**
 * Linux kernel object
**/
export declare class Kernel extends SpeakeasyBase {
    architecture?: KernelArchitectureEnum;
    deprecated?: boolean;
    id?: string;
    kvm?: boolean;
    label?: string;
    pvops?: boolean;
    version?: string;
    xen?: boolean;
}
