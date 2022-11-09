import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourcePackageResourceApt } from "./ospolicyresourcepackageresourceapt";
import { OsPolicyResourcePackageResourceDeb } from "./ospolicyresourcepackageresourcedeb";
import { OsPolicyResourcePackageResourceGooGet } from "./ospolicyresourcepackageresourcegooget";
import { OsPolicyResourcePackageResourceMsi } from "./ospolicyresourcepackageresourcemsi";
import { OsPolicyResourcePackageResourceRpm } from "./ospolicyresourcepackageresourcerpm";
import { OsPolicyResourcePackageResourceYum } from "./ospolicyresourcepackageresourceyum";
import { OsPolicyResourcePackageResourceZypper } from "./ospolicyresourcepackageresourcezypper";

export enum OsPolicyResourcePackageResourceDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED"
,    Installed = "INSTALLED"
,    Removed = "REMOVED"
}


// OsPolicyResourcePackageResource
/** 
 * A resource that manages a system package.
**/
export class OsPolicyResourcePackageResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=apt" })
  apt?: OsPolicyResourcePackageResourceApt;

  @Metadata({ data: "json, name=deb" })
  deb?: OsPolicyResourcePackageResourceDeb;

  @Metadata({ data: "json, name=desiredState" })
  desiredState?: OsPolicyResourcePackageResourceDesiredStateEnum;

  @Metadata({ data: "json, name=googet" })
  googet?: OsPolicyResourcePackageResourceGooGet;

  @Metadata({ data: "json, name=msi" })
  msi?: OsPolicyResourcePackageResourceMsi;

  @Metadata({ data: "json, name=rpm" })
  rpm?: OsPolicyResourcePackageResourceRpm;

  @Metadata({ data: "json, name=yum" })
  yum?: OsPolicyResourcePackageResourceYum;

  @Metadata({ data: "json, name=zypper" })
  zypper?: OsPolicyResourcePackageResourceZypper;
}
