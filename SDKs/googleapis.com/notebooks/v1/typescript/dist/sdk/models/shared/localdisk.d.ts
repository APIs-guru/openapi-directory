import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeGuestOsFeature } from "./runtimeguestosfeature";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";
/**
 * A Local attached disk resource.
**/
export declare class LocalDisk extends SpeakeasyBase {
    autoDelete?: boolean;
    boot?: boolean;
    deviceName?: string;
    guestOsFeatures?: RuntimeGuestOsFeature[];
    index?: number;
    initializeParams?: LocalDiskInitializeParams;
    interface?: string;
    kind?: string;
    licenses?: string[];
    mode?: string;
    source?: string;
    type?: string;
}
