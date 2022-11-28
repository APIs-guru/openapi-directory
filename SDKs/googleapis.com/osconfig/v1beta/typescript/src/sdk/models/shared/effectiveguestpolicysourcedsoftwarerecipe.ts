import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipe } from "./softwarerecipe";



// EffectiveGuestPolicySourcedSoftwareRecipe
/** 
 * A guest policy recipe including its source.
**/
export class EffectiveGuestPolicySourcedSoftwareRecipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=softwareRecipe" })
  softwareRecipe?: SoftwareRecipe;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
