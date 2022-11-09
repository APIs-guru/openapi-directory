import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlsaRecipe
/** 
 * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
**/
export class SlsaRecipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=arguments" })
  arguments?: Map<string, any>;

  @Metadata({ data: "json, name=definedInMaterial" })
  definedInMaterial?: string;

  @Metadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
