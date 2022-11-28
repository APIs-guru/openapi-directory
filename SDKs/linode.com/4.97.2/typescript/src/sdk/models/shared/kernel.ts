import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KernelArchitectureEnum {
    X8664 = "x86_64",
    I386 = "i386"
}


// Kernel
/** 
 * Linux kernel object
**/
export class Kernel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: KernelArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kvm" })
  kvm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=pvops" })
  pvops?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=xen" })
  xen?: boolean;
}
