import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
 * * If no devices are specified, booting from this configuration will hold waiting for a device to exist before being able to boot.
 *
**/
export declare class Devices extends SpeakeasyBase {
    sda?: Device;
    sdb?: Device;
    sdc?: Device;
    sdd?: Device;
    sde?: Device;
    sdf?: Device;
    sdg?: Device;
    sdh?: Device;
}
