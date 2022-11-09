import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedVirtualMachine } from "./nestedvirtualmachine";


export class IpAddressInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=virtual_machine" })
  virtualMachine?: NestedVirtualMachine;
}
