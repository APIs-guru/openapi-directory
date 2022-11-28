import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";
export declare enum PackageOccurrenceArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * Details on how a particular software package was installed on a system.
**/
export declare class PackageOccurrence extends SpeakeasyBase {
    architecture?: PackageOccurrenceArchitectureEnum;
    cpeUri?: string;
    license?: License;
    location?: Location[];
    name?: string;
    packageType?: string;
    version?: Version;
}
