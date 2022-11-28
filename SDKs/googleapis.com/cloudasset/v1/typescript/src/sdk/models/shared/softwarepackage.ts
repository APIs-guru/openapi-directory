import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionedPackage } from "./versionedpackage";
import { WindowsQuickFixEngineeringPackage } from "./windowsquickfixengineeringpackage";
import { WindowsApplication } from "./windowsapplication";
import { WindowsUpdatePackage } from "./windowsupdatepackage";
import { ZypperPatch } from "./zypperpatch";



// SoftwarePackage
/** 
 * Software package information of the operating system.
**/
export class SoftwarePackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aptPackage" })
  aptPackage?: VersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=cosPackage" })
  cosPackage?: VersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=googetPackage" })
  googetPackage?: VersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=qfePackage" })
  qfePackage?: WindowsQuickFixEngineeringPackage;

  @SpeakeasyMetadata({ data: "json, name=windowsApplication" })
  windowsApplication?: WindowsApplication;

  @SpeakeasyMetadata({ data: "json, name=wuaPackage" })
  wuaPackage?: WindowsUpdatePackage;

  @SpeakeasyMetadata({ data: "json, name=yumPackage" })
  yumPackage?: VersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=zypperPackage" })
  zypperPackage?: VersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=zypperPatch" })
  zypperPatch?: ZypperPatch;
}
