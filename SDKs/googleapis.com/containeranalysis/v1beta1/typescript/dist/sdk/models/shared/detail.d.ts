import { SpeakeasyBase } from "../../../internal/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";
import { Version } from "./version";
/**
 * Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
**/
export declare class Detail extends SpeakeasyBase {
    cpeUri?: string;
    description?: string;
    fixedLocation?: VulnerabilityLocation;
    isObsolete?: boolean;
    maxAffectedVersion?: Version;
    minAffectedVersion?: Version;
    package?: string;
    packageType?: string;
    severityName?: string;
    source?: string;
    sourceUpdateTime?: string;
    vendor?: string;
}
