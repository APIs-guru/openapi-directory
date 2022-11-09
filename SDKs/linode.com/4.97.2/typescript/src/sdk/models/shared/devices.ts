import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";
import { Device } from "./device";


// Devices
/** 
 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
 * * If no devices are specified, booting from this configuration will hold waiting for a device to exist before being able to boot.
 * 
**/
export class Devices extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=sdh" })
  sdh?: Device;
}
