import { SpeakeasyBase } from "../../../internal/utils";
import { VersionedPackage } from "./versionedpackage";
import { WindowsQuickFixEngineeringPackage } from "./windowsquickfixengineeringpackage";
import { WindowsApplication } from "./windowsapplication";
import { WindowsUpdatePackage } from "./windowsupdatepackage";
import { ZypperPatch } from "./zypperpatch";
/**
 * Software package information of the operating system.
**/
export declare class SoftwarePackage extends SpeakeasyBase {
    aptPackage?: VersionedPackage;
    cosPackage?: VersionedPackage;
    googetPackage?: VersionedPackage;
    qfePackage?: WindowsQuickFixEngineeringPackage;
    windowsApplication?: WindowsApplication;
    wuaPackage?: WindowsUpdatePackage;
    yumPackage?: VersionedPackage;
    zypperPackage?: VersionedPackage;
    zypperPatch?: ZypperPatch;
}
