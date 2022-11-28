import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipe } from "./softwarerecipe";
/**
 * A guest policy recipe including its source.
**/
export declare class EffectiveGuestPolicySourcedSoftwareRecipe extends SpeakeasyBase {
    softwareRecipe?: SoftwareRecipe;
    source?: string;
}
