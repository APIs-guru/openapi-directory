import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum {
    OsUnspecified = "OS_UNSPECIFIED"
,    DesktopMac = "DESKTOP_MAC"
,    DesktopWindows = "DESKTOP_WINDOWS"
,    DesktopLinux = "DESKTOP_LINUX"
,    DesktopChromeOs = "DESKTOP_CHROME_OS"
,    Android = "ANDROID"
,    Ios = "IOS"
}


// GoogleIdentityAccesscontextmanagerV1OsConstraint
/** 
 * A restriction on the OS type and version of devices making requests.
**/
export class GoogleIdentityAccesscontextmanagerV1OsConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimumVersion" })
  minimumVersion?: string;

  @Metadata({ data: "json, name=osType" })
  osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum;

  @Metadata({ data: "json, name=requireVerifiedChromeOs" })
  requireVerifiedChromeOs?: boolean;
}
