import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourcePackageResourceApt } from "./ospolicyresourcepackageresourceapt";
import { OsPolicyResourcePackageResourceDeb } from "./ospolicyresourcepackageresourcedeb";
import { OsPolicyResourcePackageResourceGooGet } from "./ospolicyresourcepackageresourcegooget";
import { OsPolicyResourcePackageResourceMsi } from "./ospolicyresourcepackageresourcemsi";
import { OsPolicyResourcePackageResourceRpm } from "./ospolicyresourcepackageresourcerpm";
import { OsPolicyResourcePackageResourceYum } from "./ospolicyresourcepackageresourceyum";
import { OsPolicyResourcePackageResourceZypper } from "./ospolicyresourcepackageresourcezypper";


export enum OsPolicyResourcePackageResourceDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Installed = "INSTALLED",
    Removed = "REMOVED"
}


// OsPolicyResourcePackageResource
/** 
 * A resource that manages a system package.
**/
export class OsPolicyResourcePackageResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: OsPolicyResourcePackageResourceApt;

  @SpeakeasyMetadata({ data: "json, name=deb" })
  deb?: OsPolicyResourcePackageResourceDeb;

  @SpeakeasyMetadata({ data: "json, name=desiredState" })
  desiredState?: OsPolicyResourcePackageResourceDesiredStateEnum;

  @SpeakeasyMetadata({ data: "json, name=googet" })
  googet?: OsPolicyResourcePackageResourceGooGet;

  @SpeakeasyMetadata({ data: "json, name=msi" })
  msi?: OsPolicyResourcePackageResourceMsi;

  @SpeakeasyMetadata({ data: "json, name=rpm" })
  rpm?: OsPolicyResourcePackageResourceRpm;

  @SpeakeasyMetadata({ data: "json, name=yum" })
  yum?: OsPolicyResourcePackageResourceYum;

  @SpeakeasyMetadata({ data: "json, name=zypper" })
  zypper?: OsPolicyResourcePackageResourceZypper;
}
