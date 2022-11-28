import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// Devices
/** 
 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
 * * If no devices are specified, booting from this configuration will hold waiting for a device to exist before being able to boot.
 * 
**/
export class Devices extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=sdh" })
  sdh?: Device;
}
