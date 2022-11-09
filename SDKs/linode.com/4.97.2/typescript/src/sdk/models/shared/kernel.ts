import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KernelArchitectureEnum {
    X8664 = "x86_64"
,    I386 = "i386"
}


// Kernel
/** 
 * Linux kernel object
**/
export class Kernel extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: KernelArchitectureEnum;

  @Metadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kvm" })
  kvm?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=pvops" })
  pvops?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=xen" })
  xen?: boolean;
}
