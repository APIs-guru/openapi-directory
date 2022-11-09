import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";


export class RescueDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=sda" })
  sda?: Device;

  @Metadata({ data: "json, name=sdb" })
  sdb?: Device;

  @Metadata({ data: "json, name=sdc" })
  sdc?: Device;

  @Metadata({ data: "json, name=sdd" })
  sdd?: Device;

  @Metadata({ data: "json, name=sde" })
  sde?: Device;

  @Metadata({ data: "json, name=sdf" })
  sdf?: Device;

  @Metadata({ data: "json, name=sdg" })
  sdg?: Device;
}
