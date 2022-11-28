import { SpeakeasyBase } from "../../../internal/utils";
import { Digest } from "./digest";
import { Distribution } from "./distribution";
import { License } from "./license";
import { Version } from "./version";
export declare enum PackageArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * Package represents a particular package version.
**/
export declare class Package extends SpeakeasyBase {
    architecture?: PackageArchitectureEnum;
    cpeUri?: string;
    description?: string;
    digest?: Digest[];
    distribution?: Distribution[];
    license?: License;
    maintainer?: string;
    name?: string;
    packageType?: string;
    url?: string;
    version?: Version;
}
