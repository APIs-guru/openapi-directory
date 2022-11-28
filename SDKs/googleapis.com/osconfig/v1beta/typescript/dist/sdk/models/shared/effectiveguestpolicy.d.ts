import { SpeakeasyBase } from "../../../internal/utils";
import { EffectiveGuestPolicySourcedPackageRepository } from "./effectiveguestpolicysourcedpackagerepository";
import { EffectiveGuestPolicySourcedPackage } from "./effectiveguestpolicysourcedpackage";
import { EffectiveGuestPolicySourcedSoftwareRecipe } from "./effectiveguestpolicysourcedsoftwarerecipe";
/**
 * The effective guest policy that applies to a VM instance.
**/
export declare class EffectiveGuestPolicy extends SpeakeasyBase {
    packageRepositories?: EffectiveGuestPolicySourcedPackageRepository[];
    packages?: EffectiveGuestPolicySourcedPackage[];
    softwareRecipes?: EffectiveGuestPolicySourcedSoftwareRecipe[];
}
