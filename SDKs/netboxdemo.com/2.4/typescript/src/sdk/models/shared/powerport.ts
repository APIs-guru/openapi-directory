import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedPowerOutlet } from "./nestedpoweroutlet";



export class PowerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=power_outlet" })
  powerOutlet?: NestedPowerOutlet;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
