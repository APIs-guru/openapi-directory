import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { PackageRepository } from "./packagerepository";
import { Package } from "./package";
import { SoftwareRecipe } from "./softwarerecipe";



// GuestPolicy
/** 
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
export class GuestPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageRepositories", elemType: PackageRepository })
  packageRepositories?: PackageRepository[];

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=recipes", elemType: SoftwareRecipe })
  recipes?: SoftwareRecipe[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GuestPolicyInput
/** 
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
export class GuestPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageRepositories", elemType: PackageRepository })
  packageRepositories?: PackageRepository[];

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=recipes", elemType: SoftwareRecipe })
  recipes?: SoftwareRecipe[];
}
