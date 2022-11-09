import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectiveGuestPolicySourcedPackageRepository } from "./effectiveguestpolicysourcedpackagerepository";
import { EffectiveGuestPolicySourcedPackage } from "./effectiveguestpolicysourcedpackage";
import { EffectiveGuestPolicySourcedSoftwareRecipe } from "./effectiveguestpolicysourcedsoftwarerecipe";


// EffectiveGuestPolicy
/** 
 * The effective guest policy that applies to a VM instance.
**/
export class EffectiveGuestPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageRepositories", elemType: shared.EffectiveGuestPolicySourcedPackageRepository })
  packageRepositories?: EffectiveGuestPolicySourcedPackageRepository[];

  @Metadata({ data: "json, name=packages", elemType: shared.EffectiveGuestPolicySourcedPackage })
  packages?: EffectiveGuestPolicySourcedPackage[];

  @Metadata({ data: "json, name=softwareRecipes", elemType: shared.EffectiveGuestPolicySourcedSoftwareRecipe })
  softwareRecipes?: EffectiveGuestPolicySourcedSoftwareRecipe[];
}
