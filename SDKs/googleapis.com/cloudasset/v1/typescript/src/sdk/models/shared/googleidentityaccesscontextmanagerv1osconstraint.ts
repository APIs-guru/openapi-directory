import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum {
    OsUnspecified = "OS_UNSPECIFIED",
    DesktopMac = "DESKTOP_MAC",
    DesktopWindows = "DESKTOP_WINDOWS",
    DesktopLinux = "DESKTOP_LINUX",
    DesktopChromeOs = "DESKTOP_CHROME_OS",
    Android = "ANDROID",
    Ios = "IOS"
}


// GoogleIdentityAccesscontextmanagerV1OsConstraint
/** 
 * A restriction on the OS type and version of devices making requests.
**/
export class GoogleIdentityAccesscontextmanagerV1OsConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimumVersion" })
  minimumVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=osType" })
  osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=requireVerifiedChromeOs" })
  requireVerifiedChromeOs?: boolean;
}
