import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlsaRecipe
/** 
 * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
**/
export class SlsaRecipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=definedInMaterial" })
  definedInMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
