import { SpeakeasyBase } from "../../../internal/utils";
import { Digest } from "./digest";
import { Distribution } from "./distribution";
import { License } from "./license";
import { Version } from "./version";
export declare enum PackageNoteArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}
/**
 * PackageNote represents a particular package version.
**/
export declare class PackageNote extends SpeakeasyBase {
    architecture?: PackageNoteArchitectureEnum;
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
