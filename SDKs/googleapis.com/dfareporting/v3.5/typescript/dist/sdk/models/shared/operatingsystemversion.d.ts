import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
/**
 * Contains information about a particular version of an operating system that can be targeted by ads.
**/
export declare class OperatingSystemVersion extends SpeakeasyBase {
    id?: string;
    kind?: string;
    majorVersion?: string;
    minorVersion?: string;
    name?: string;
    operatingSystem?: OperatingSystem;
}
