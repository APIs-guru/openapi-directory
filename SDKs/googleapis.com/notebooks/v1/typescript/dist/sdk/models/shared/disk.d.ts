import { SpeakeasyBase } from "../../../internal/utils";
import { GuestOsFeature } from "./guestosfeature";
/**
 * An instance-attached disk resource.
**/
export declare class Disk extends SpeakeasyBase {
    autoDelete?: boolean;
    boot?: boolean;
    deviceName?: string;
    diskSizeGb?: string;
    guestOsFeatures?: GuestOsFeature[];
    index?: string;
    interface?: string;
    kind?: string;
    licenses?: string[];
    mode?: string;
    source?: string;
    type?: string;
}
