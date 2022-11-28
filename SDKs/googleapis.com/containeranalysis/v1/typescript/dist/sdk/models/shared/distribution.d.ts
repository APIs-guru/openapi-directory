import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
export declare enum DistributionArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
**/
export declare class Distribution extends SpeakeasyBase {
    architecture?: DistributionArchitectureEnum;
    cpeUri?: string;
    description?: string;
    latestVersion?: Version;
    maintainer?: string;
    url?: string;
}
