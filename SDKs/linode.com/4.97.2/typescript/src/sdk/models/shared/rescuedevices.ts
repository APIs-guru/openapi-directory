import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class RescueDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sda" })
  sda?: Device;

  @SpeakeasyMetadata({ data: "json, name=sdb" })
  sdb?: Device;

  @SpeakeasyMetadata({ data: "json, name=sdc" })
  sdc?: Device;

  @SpeakeasyMetadata({ data: "json, name=sdd" })
  sdd?: Device;

  @SpeakeasyMetadata({ data: "json, name=sde" })
  sde?: Device;

  @SpeakeasyMetadata({ data: "json, name=sdf" })
  sdf?: Device;

  @SpeakeasyMetadata({ data: "json, name=sdg" })
  sdg?: Device;
}
