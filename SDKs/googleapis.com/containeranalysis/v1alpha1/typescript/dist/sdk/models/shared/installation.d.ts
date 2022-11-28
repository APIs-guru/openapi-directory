import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";
export declare enum InstallationArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * This represents how a particular software package may be installed on a system.
**/
export declare class Installation extends SpeakeasyBase {
    architecture?: InstallationArchitectureEnum;
    cpeUri?: string;
    license?: License;
    location?: Location[];
    name?: string;
    packageType?: string;
    version?: Version;
}
/**
 * This represents how a particular software package may be installed on a system.
**/
export declare class InstallationInput extends SpeakeasyBase {
    license?: License;
    location?: Location[];
    version?: Version;
}
