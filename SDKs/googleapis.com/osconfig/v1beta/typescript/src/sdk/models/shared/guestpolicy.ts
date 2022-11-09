import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";
import { PackageRepository } from "./packagerepository";
import { Package } from "./package";
import { SoftwareRecipe } from "./softwarerecipe";


// GuestPolicy
/** 
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
export class GuestPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageRepositories", elemType: shared.PackageRepository })
  packageRepositories?: PackageRepository[];

  @Metadata({ data: "json, name=packages", elemType: shared.Package })
  packages?: Package[];

  @Metadata({ data: "json, name=recipes", elemType: shared.SoftwareRecipe })
  recipes?: SoftwareRecipe[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
