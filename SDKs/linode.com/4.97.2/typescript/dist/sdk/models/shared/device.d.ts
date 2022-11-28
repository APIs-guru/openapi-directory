import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
 *
**/
export declare class Device extends SpeakeasyBase {
    diskId?: number;
    volumeId?: number;
}
