import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedVirtualMachine } from "./nestedvirtualmachine";



export class IpAddressInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=virtual_machine" })
  virtualMachine?: NestedVirtualMachine;
}
