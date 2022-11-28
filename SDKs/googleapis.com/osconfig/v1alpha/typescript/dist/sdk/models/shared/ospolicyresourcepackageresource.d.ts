import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourcePackageResourceApt } from "./ospolicyresourcepackageresourceapt";
import { OsPolicyResourcePackageResourceDeb } from "./ospolicyresourcepackageresourcedeb";
import { OsPolicyResourcePackageResourceGooGet } from "./ospolicyresourcepackageresourcegooget";
import { OsPolicyResourcePackageResourceMsi } from "./ospolicyresourcepackageresourcemsi";
import { OsPolicyResourcePackageResourceRpm } from "./ospolicyresourcepackageresourcerpm";
import { OsPolicyResourcePackageResourceYum } from "./ospolicyresourcepackageresourceyum";
import { OsPolicyResourcePackageResourceZypper } from "./ospolicyresourcepackageresourcezypper";
export declare enum OsPolicyResourcePackageResourceDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Installed = "INSTALLED",
    Removed = "REMOVED"
}
/**
 * A resource that manages a system package.
**/
export declare class OsPolicyResourcePackageResource extends SpeakeasyBase {
    apt?: OsPolicyResourcePackageResourceApt;
    deb?: OsPolicyResourcePackageResourceDeb;
    desiredState?: OsPolicyResourcePackageResourceDesiredStateEnum;
    googet?: OsPolicyResourcePackageResourceGooGet;
    msi?: OsPolicyResourcePackageResourceMsi;
    rpm?: OsPolicyResourcePackageResourceRpm;
    yum?: OsPolicyResourcePackageResourceYum;
    zypper?: OsPolicyResourcePackageResourceZypper;
}
