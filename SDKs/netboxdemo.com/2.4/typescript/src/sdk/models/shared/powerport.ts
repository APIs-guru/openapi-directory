import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedPowerOutlet } from "./nestedpoweroutlet";


export class PowerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=power_outlet" })
  powerOutlet?: NestedPowerOutlet;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
