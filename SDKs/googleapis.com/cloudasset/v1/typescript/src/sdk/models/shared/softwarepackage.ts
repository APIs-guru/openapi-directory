import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VersionedPackage } from "./versionedpackage";
import { VersionedPackage } from "./versionedpackage";
import { VersionedPackage } from "./versionedpackage";
import { WindowsQuickFixEngineeringPackage } from "./windowsquickfixengineeringpackage";
import { WindowsApplication } from "./windowsapplication";
import { WindowsUpdatePackage } from "./windowsupdatepackage";
import { VersionedPackage } from "./versionedpackage";
import { VersionedPackage } from "./versionedpackage";
import { ZypperPatch } from "./zypperpatch";


// SoftwarePackage
/** 
 * Software package information of the operating system.
**/
export class SoftwarePackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=aptPackage" })
  aptPackage?: VersionedPackage;

  @Metadata({ data: "json, name=cosPackage" })
  cosPackage?: VersionedPackage;

  @Metadata({ data: "json, name=googetPackage" })
  googetPackage?: VersionedPackage;

  @Metadata({ data: "json, name=qfePackage" })
  qfePackage?: WindowsQuickFixEngineeringPackage;

  @Metadata({ data: "json, name=windowsApplication" })
  windowsApplication?: WindowsApplication;

  @Metadata({ data: "json, name=wuaPackage" })
  wuaPackage?: WindowsUpdatePackage;

  @Metadata({ data: "json, name=yumPackage" })
  yumPackage?: VersionedPackage;

  @Metadata({ data: "json, name=zypperPackage" })
  zypperPackage?: VersionedPackage;

  @Metadata({ data: "json, name=zypperPatch" })
  zypperPatch?: ZypperPatch;
}
