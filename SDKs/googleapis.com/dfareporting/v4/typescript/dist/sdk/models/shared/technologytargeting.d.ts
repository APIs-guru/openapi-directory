import { SpeakeasyBase } from "../../../internal/utils";
import { Browser } from "./browser";
import { ConnectionType } from "./connectiontype";
import { MobileCarrier } from "./mobilecarrier";
import { OperatingSystemVersion } from "./operatingsystemversion";
import { OperatingSystem } from "./operatingsystem";
import { PlatformType } from "./platformtype";
/**
 * Technology Targeting.
**/
export declare class TechnologyTargeting extends SpeakeasyBase {
    browsers?: Browser[];
    connectionTypes?: ConnectionType[];
    mobileCarriers?: MobileCarrier[];
    operatingSystemVersions?: OperatingSystemVersion[];
    operatingSystems?: OperatingSystem[];
    platformTypes?: PlatformType[];
}
