import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectiveGuestPolicySourcedPackageRepository } from "./effectiveguestpolicysourcedpackagerepository";
import { EffectiveGuestPolicySourcedPackage } from "./effectiveguestpolicysourcedpackage";
import { EffectiveGuestPolicySourcedSoftwareRecipe } from "./effectiveguestpolicysourcedsoftwarerecipe";



// EffectiveGuestPolicy
/** 
 * The effective guest policy that applies to a VM instance.
**/
export class EffectiveGuestPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageRepositories", elemType: EffectiveGuestPolicySourcedPackageRepository })
  packageRepositories?: EffectiveGuestPolicySourcedPackageRepository[];

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: EffectiveGuestPolicySourcedPackage })
  packages?: EffectiveGuestPolicySourcedPackage[];

  @SpeakeasyMetadata({ data: "json, name=softwareRecipes", elemType: EffectiveGuestPolicySourcedSoftwareRecipe })
  softwareRecipes?: EffectiveGuestPolicySourcedSoftwareRecipe[];
}
