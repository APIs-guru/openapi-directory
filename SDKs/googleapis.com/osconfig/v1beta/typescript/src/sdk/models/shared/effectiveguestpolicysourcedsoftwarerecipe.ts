import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoftwareRecipe } from "./softwarerecipe";


// EffectiveGuestPolicySourcedSoftwareRecipe
/** 
 * A guest policy recipe including its source.
**/
export class EffectiveGuestPolicySourcedSoftwareRecipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=softwareRecipe" })
  softwareRecipe?: SoftwareRecipe;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
