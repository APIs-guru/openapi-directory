import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Device
/** 
 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 * 
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk_id" })
  diskId?: number;

  @Metadata({ data: "json, name=volume_id" })
  volumeId?: number;
}
