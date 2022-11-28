import { SpeakeasyBase } from "../../../internal/utils";
import { LanguagePackageDependency } from "./languagepackagedependency";
import { FileLocation } from "./filelocation";
export declare enum PackageDataPackageTypeEnum {
    PackageTypeUnspecified = "PACKAGE_TYPE_UNSPECIFIED",
    Os = "OS",
    Maven = "MAVEN",
    Go = "GO",
    GoStdlib = "GO_STDLIB"
}
export declare class PackageData extends SpeakeasyBase {
    cpeUri?: string;
    dependencyChain?: LanguagePackageDependency[];
    fileLocation?: FileLocation[];
    hashDigest?: string;
    os?: string;
    osVersion?: string;
    package?: string;
    packageType?: PackageDataPackageTypeEnum;
    patchedCve?: string[];
    unused?: string;
    version?: string;
}
