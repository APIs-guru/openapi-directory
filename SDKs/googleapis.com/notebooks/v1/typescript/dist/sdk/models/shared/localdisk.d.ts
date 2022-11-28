import { SpeakeasyBase } from "../../../internal/utils";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";
import { RuntimeGuestOsFeature } from "./runtimeguestosfeature";
/**
 * A Local attached disk resource.
**/
export declare class LocalDiskInput extends SpeakeasyBase {
    initializeParams?: LocalDiskInitializeParams;
    interface?: string;
    mode?: string;
    source?: string;
    type?: string;
}
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
